let _this = this
firebase.auth().createUserWithEmailAndPassword(this.state.registerEmail.trim(), this.state.registerPw.trim())
    .then(user => {
        console.log('user log in success')
        console.log(_this.state.registerName)
        user.updateProfile({
            displayName: _this.state.registerName
        }).then(function () {
            // _this.setState({ loadingSubmit: false })
            Alert.alert(_this.state.lang == 'TH' ? 'สมัครสมาชิกสำเร็จ' : 'Register Successfully', '', [{
                text: _this.state.lang == 'TH' ? 'ตกลง' : 'OK', onPress: () => {
                    AsyncStorage.setItem('userName', _this.state.registerName)
                    AsyncStorage.setItem('userId', user.uid)
                    AsyncStorage.setItem('isLogin', 'true')
                    global.userName = _this.state.registerName;
                    global.userId = user.uid;
                    // global.userCount = 0;
                    global.isLogin = true;
                    _this.setState({
                        userName: _this.state.registerName,
                        userId: user.uid,
                        isLogin: true
                    })
                    // db.ref('users').update({
                    //     [user.uid + '/name']: _this.state.registerName,
                    // })
                    // _this.setState({ register: false })
                    // if (_this.state.isPlay) {
                    //     _this.props.navigation.navigate('Main')
                    // }
                }
            }])
        }, function (error) {
            // An error happened.
        });
    }).catch((e) => {
        console.log(e.message, e.code)
        if (e.code == 'auth/invalid-email') {
            if (this.state.lang == 'TH') {
                Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'E-Mail ไม่ถูกต้อง', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Registration Failed', 'Invalid E-Mail', [{ text: 'OK' }])
            }
            this.setState({ loadingSubmit: false })
        }
        else if (e.code == 'auth/weak-password') {
            if (this.state.lang == 'TH') {
                Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'รหัสผ่านสั้นเกินไป \n(6 ตัวอักษรขึ้นไป)', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Registration Failed', 'Password is too weak \n(password must be at least 6 characters)', [{ text: 'OK' }])
            }
            this.setState({ loadingSubmit: false })
        }
        else if (e.code == 'auth/email-already-in-use') {
            if (this.state.lang == 'TH') {
                Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'E-Mail นี้ถูกใช้งานแล้ว', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Registration Failed', 'This email is already in use \n (' + this.state.registerEmail.trim() + ')', [{ text: 'OK' }])
            }
            this.setState({ loadingSubmit: false })
        }
        else {
            if (this.state.lang == 'TH') {
                Alert.alert('สมัครสมาชิกไม่สำเร็จ', e.message, [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Registration Failed', e.message, [{ text: 'OK' }])
            }
            this.setState({ loadingSubmit: false })
        }
    })