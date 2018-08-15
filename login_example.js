let _this = this
firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(user => {
        // db.ref('users/' + user.uid).on('value', function (data) {
        data = data.val()
        AsyncStorage.setItem('userName', user.displayName)
        AsyncStorage.setItem('userId', user.uid)
        AsyncStorage.setItem('isLogin', 'true')
        global.userName = user.displayName;
        global.userId = user.uid;
        // global.userCount = data.count;
        global.isLogin = true;
        _this.setState({
            userName: user.displayName,
            userId: user.uid,
            isLogin: true
        })
        // _this.setState({ loadingLogin: false })
        // if (_this.state.isPlay) {
        //     _this.props.navigation.navigate('Main')
        // }
        // })
    })
    .catch((e) => {
        if (e.code == 'auth/invalid-email') {
            this.setState({ loadingLogin: false })
            if (this.state.lang == 'TH') {
                Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'กรุณากรอกข้อมูลให้ครบถ้วน', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Login Failed', 'Please complete all fields', [{ text: 'OK' }])
            }
        }
        else if (e.code == 'auth/user-not-found') {
            this.setState({ loadingLogin: false })
            if (this.state.lang == 'TH') {
                Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'ไม่พบชื่อผู้ใช้งาน \n(' + this.state.email + ')', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Login Failed', 'user not found', [{ text: 'OK' }])
            }
        }
        else if (e.code == 'auth/wrong-password') {
            this.setState({ loadingLogin: false })
            if (this.state.lang == 'TH') {
                Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'รหัสผ่านไม่ถูกต้อง', [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Login Failed', 'wrong password', [{ text: 'OK' }])
            }
        }
        else {
            this.setState({ loadingLogin: false })
            if (this.state.lang == 'TH') {
                Alert.alert('เข้าสู่ระบบไม่สำเร็จ', e.message, [{ text: 'ตกลง' }])
            }
            else {
                Alert.alert('Login Failed', e.message, [{ text: 'OK' }])
            }
        }
    })