let nav= () => {
    return `<div id="before">
                <img id="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjd37EbTdJhO8Xzncd3nzoaf2MyfgD4FneMVqB5Mr4VUbZJ5H4vASkpFPruRq5PnkzplY&usqp=CAU" alt="">
                <img id="logo" src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw" alt="logo">
                <button id="onlinecourses">Online Courses</button>
                <button id="certifications">Certification</button>
                <button id="livetraining">Live Training</button>
                <button id="remoteworking">Remote Working</button>
                <div id="morediv">
                    <div id="more">
                        More
                        <img id="moreimg" src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png" alt="">
                    </div>
                    <div id="moreappend"></div>
                </div>
            </div>
            <div id="after">
                <img id="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjd37EbTdJhO8Xzncd3nzoaf2MyfgD4FneMVqB5Mr4VUbZJ5H4vASkpFPruRq5PnkzplY&usqp=CAU" alt="">
                <img id="logo" src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw" alt="logo">
                <a href="" id="mylearningplan">My Learing Plan</a>
                <a href="./online.html" id="onlinecourses1">Online Courses</a>
                <a href="./LiveTranining.html" id="livetraining1">Live Training</a>
                <a href="./rem_work.html" id="remoteworking1">Remote Working</a>
                <div id="signinmorediv">
                    <div id="signinmore">
                        More
                        <img id="signinmoreimg" src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png" alt="">
                    </div>
                    <div id="signinmoreappend"></div>
                </div>
            </div>
            <div id="right">
                <button id="signin">Sign in</button>
                <button id="register">Register</button>
            </div>`;
}


let menudiv= () => {
    return `<a href="./online.html">Online Courses</a><br>
    <a href="./certificate.html">Certification</a><br>
    <a href="./LiveTranining.html">Live Training</a><br>
    <a href="./rem_work.html">Remote Working</a><br>
    <a href="./Tools&Resources.html">Tools & Resources</a><br>
    <a href="./faq_help.html">Help & FAQs</a><br>
    <a href="">Feedback</a><br>
    <a href="./signin.html">Sign in</a><br>
    <a href="./register.html">Register</a><br>`;
}

let aftermenudiv= () => {
    return `<a href="">My Larning Plan</a><br>
    <a href="./online.html">Online Courses</a><br>
    <a href="./LiveTranining.html">Live Training</a><br>
    <a href="./rem_work.html">Remote Working</a><br>
    <a href="./certificate.html">Certification</a><br>
    <a href="./Tools&Resources.html">Tools & Resources</a><br>
    <a href="./faq_help.html">Help & FAQs</a><br>
    <a href="">Feedback</a><br>
    <a href="">My Profile</a><br>
    <button id="menusignout">Sign out</button><br>`;
}



let footerdata= () => {
    return `<div>
                <img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" alt="">
                <div>
                    <label for="select">Privacy & Terms</label>
                    <select id="">
                        <option value="">United Kingdom </option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <p>Share</p>
                <img id="facebook" src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png" alt="">
                <img id="twitter" src="data:image/jpeg;base64,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" alt="">
                <img id="linkedin" src="data:image/png;base64,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" alt="">
                </div>
            </div>`;
}

export {nav, menudiv, aftermenudiv, footerdata};