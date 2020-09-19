import React, { Component } from 'react';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Frame, Button } from './styles';
import Logo from '../../assets/gdgjf.png';

import html2canvas from 'html2canvas';

firebase.initializeApp({
    apiKey: "AIzaSyDflrkP2uTFEkOtT_KDRcDPgjjDvFd9MQE",
    authDomain: "profilemaster-b369d.firebaseapp.com"
})

class SignIn extends Component {
    state = { isSignedIn: false, downloadURL: '' }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        })
    }

    download(dataUrl) {
        const element = document.createElement('a');
        element.setAttribute('href', dataUrl);
        element.setAttribute('download', 'profile-master.png');
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }

    handleDownload() {
        html2canvas(document.getElementById('capture'), { useCORS: true, height: 400, width: 400, scrollY: -window.scrollY }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            this.download(imgData);
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.isSignedIn ? (
                <span>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    
                    <Frame id="capture">
                        <img
                            src={firebase.auth().currentUser.photoURL}
                            alt="profile"
                        />
                        <div>
                            <img src={Logo} alt="Logo GDG Juiz de Fora"/>
                            <div>
                                <span>{firebase.auth().currentUser.providerData[0].displayName}</span>
                                <strong>Embaixador</strong>
                            </div>
                        </div>
                    </Frame>

                    <Button onClick={() => this.handleDownload()}>Download</Button>
                </span>
                ) : (
                <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                )}
            </div>
        )
    };
}

export default SignIn;