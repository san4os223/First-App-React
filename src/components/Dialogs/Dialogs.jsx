import React from "react";
import dialogStyll from './DIalogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={dialogStyll.dialogsContent}>
            <div className={dialogStyll.dialogs}>
                <div className={dialogStyll.dialogsUser}>

                    <div className={dialogStyll.dialog + ' ' + dialogStyll.active}>
                        1A
                    </div>
                    <div className={dialogStyll.dialog}>
                        2B
                    </div>
                    <div className={dialogStyll.dialog}>
                        3B
                    </div>
                    <div className={dialogStyll.dialog}>
                        4B
                    </div>
                    <div className={dialogStyll.dialog}>
                        5B
                    </div>

                </div>
                <div className={dialogStyll.messages}>
                    <div className={dialogStyll.message}> how are u</div>
                    <div className={dialogStyll.message}> 1111111</div>
                    <div className={dialogStyll.message}>22222</div>
                </div>
            </div>
        </div>
    );

}

export default Dialogs;