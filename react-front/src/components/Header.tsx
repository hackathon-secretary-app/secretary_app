import React, { ChangeEvent, useState } from 'react'
import superagent from 'superagent'

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
  const [inputText, setInputText] = useState<string>('おはようなのだ')
  const [queryJson, setQueryJson] = useState<Query>()

  // 文字列からQueryを作り出す
  const zundamon = async () => {
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
                <h1>
                    君だけのずんだもん
                </h1>
            </div>
        </div>
        <nav>
            <button onClick={zundamon}>今日の予定</button>
        </nav>
    </header>
  )
}

export default Header