import React, { useState } from 'react'
import superagent from 'superagent'
import axios from 'axios'

// Query型定義
type Mora = {
  text: string
  consonant: string
  consonant_length: number
  vowel: string
  vowel_length: number
  pitch: number
}

type Query = {
  accent_phrases: {
      moras: Mora[]
      accent: number
      pause_mora: Mora
  }
  speedScale: number
  pitchScale: number
  intonationScale: number
  volumeScale: number
  prePhonemeLength: number
  postPhonemeLength: number
  outputSamplingRate: number
  outputStereo: boolean
  kana: string
}

const Header = () => {
    const [inputText, setInputText] = useState<string>()
    const [queryJson, setQueryJson] = useState<Query>()

    const date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    // 文字列からQueryを作り出す
    const zundamon = async () => {
        console.log(today)
        const baseURL = "http://localhost:8000/users/1/todos/1/today";
        axios.get(baseURL,{
        params:{
            'start_date': today,
            'end_date': today
        }
        }).then((res)=>{
            var response = res.data;
            console.log(response) 
            
            const tasks: string[] = response.map((row: any) => row.task_name);
            console.log(tasks)

            let scenario: string = '今日のタスクは、';
            scenario += tasks.length.toString()
            scenario += "つあるのだー。"
            for (let i = 1; i <= tasks.length; i++) {
            scenario += i.toString();
            scenario += "つ目、"
            scenario += tasks[i-1];
            scenario += "。"
            }
            scenario += "なのだー。今日も頑張るのだー。"
            console.log(scenario);
            setInputText(scenario);
        })

        const res = await superagent
            .post('http://localhost:50021/audio_query')
            .query({ speaker: 1, text: inputText })

        if (!res) return

        setQueryJson(res.body as Query)

        const res2 = await superagent
        .post('http://localhost:50021/synthesis')
        .query({ speaker: 1 })
        .send(queryJson)
        .responseType('blob')

        if (!res2) return
        
        const audioUrl = URL.createObjectURL(res2.body);
        const audio = new Audio(audioUrl);
        audio.play();
    }

  return (
    <header>
        <div className='App-header'>
            <div className='logo'>
                <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
                    君だけのずんだもん
                </h1>
            </div>
        </div>
        <nav>
            <button style={{ fontSize: "1.5em" }} onClick={zundamon}>今日のタスク</button>
        </nav>
    </header>
  )
}

export default Header