import React, { useState } from "react"

function Footer() {
    let d = new Date().getFullYear()

    return(
        <div id="footer">
            <h4>Copyright © {d} CJS Inc.  All Rights Reserved</h4>
        </div>
    )
}

export default Footer;