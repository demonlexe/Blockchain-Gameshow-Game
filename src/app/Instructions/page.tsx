"use client"

export default function InstructionsPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'auto',
            textAlign: 'center',  // Center text horizontally
            padding: '20px',
        }}>

        <div style={{
            maxWidth: '690px',  // Limit the width of content
            width: '100%',  // Allow container to be responsive
        }}>

        <br></br>
        <br></br>

        <h1 style={{
            textAlign: 'center'  // Center the heading only
        }}>
            Instructions
        </h1>

        <div style={{ textAlign: 'left' }}>

        <br></br>

                <div>There are two <strong>teams</strong>: blue team  and red team </div>

                <div> <strong> Goal</strong>: be the first team to create a linked chain from one side to the other </div>

                <div>The <strong> blue </strong> team wants to create a linked chain from the <strong> left </strong> side to the <strong> right </strong> side (or vice versa) </div>

                <div>The <strong> red </strong> team wants to create a linked chain from <strong> top </strong> to <strong> bottom </strong> (or vice versa) </div> <br></br>

                <div> Here are example cases of how the <strong> blue team </strong> could make a <strong> linked chain</strong>: </div>


                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px', width: "100%"}}>

                <img
                src="/images/image1.png"
                alt="Blue team linked chain example"
                width={221}
                height={125}
                />

                <img
                src="/images/image2.png"
                alt="Blue team linked chain example"
                width={221}
                height={125}
                />

                <img
                src="/images/image3.png"
                alt="Blue team linked chain example"
                width={221}
                height={125}
                />

                </div>

                <br></br>


                <div> Here are example cases of how the <strong> red team </strong> could make a <strong> linked chain</strong>: </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px', width: "100%" }}>

                <img
                src="/images/image4.png"
                alt="Red team linked chain example"
                width={221}
                height={125}
                />

                <img
                src="/images/image5.png"
                alt="Red team linked chain example"
                width={221}
                height={125}
                />

                <img
                src="/images/image6.png"
                alt="Red team linked chain example"
                width={221}
                height={125}
                />

                </div>

                <br></br>
                <br></br>


                <div> Click a letter to receive a <strong>question</strong> (the answer to this question starts with this letter) </div>

                <div> <img
                src="/images/image7.png"
                alt="Blue team linked chain example"
                width={221}
                height={175}
                />
                </div>

                <br></br>


                <div> For each question, both teams will <strong>guess</strong> (for each guess, click <strong>check answer</strong>)</div>
                <div>Each member of each team is allowed one individual guess per question</div>

                <div> <img
                src="/images/image8.png"
                alt="Blue team linked chain example"
                width={221}
                height={175}
                />
                </div>

                <br></br>


                <div> If both teams are <strong>unable to guess</strong> correctly, click <strong>new question</strong> (you can do this as many times as needed)</div>

                <div> <img
                src="/images/image9.png"
                alt="Blue team linked chain example"
                width={221}
                height={175}
                />
                </div>

                <br></br>


                <div>The first person to <strong>guess correctly</strong> earns a <strong>point</strong> for their team and picks the next letter</div>

                <div> <img
                src="/images/image10.png"
                alt="Blue team linked chain example"
                width={221}
                height={175}
                />
                </div>

                <br></br>


                <div>The first team to create a <strong>linked chain</strong> from one side to the other wins!</div>

                <div> <img
                src="/images/image11.png"
                alt="Blue team linked chain example"
                width={221}
                height={175}
                />
                </div>
        </div>
        </div>
        </div>
    )
}
