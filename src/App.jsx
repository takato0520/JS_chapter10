import React from 'react'
import { Canvas } from './Canvas'
import Sepia from './controlArea/Sepia'
import Back from './controlArea/Back'

const App = () => {

    return (
        <>
            <div id="wrap">

                <Canvas />

                <div id="controlArea" class="uiArea">
                    <Sepia />
                    <Back />
                </div>

                <div id="commentArea" class="uiArea">
                    <div>コメント<span id="commentStatus"></span></div>
                    <div>
                        <textarea name="" id="comment"
                            data-defaultValue="投稿です！"
                            data-maxLength="100"
                        ></textarea>
                    </div>
                </div>

                <div id="sendArea" class="uiArea">

                </div>

                <div id="postListArea"></div>
            </div>
        </>
    )
}

export default App