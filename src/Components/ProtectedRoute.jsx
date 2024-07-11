import {Component} from "react";
import {Navigate} from "react-router-dom"
import LoginApi from "../Api/LoginApi";
import React from "react";

class ProtectedRoute extends Component {
    state = {
        isAuth: null
    }

    async componentWillMount() {
        const loginResponse = await LoginApi()
        if (loginResponse.status === 200) {
            this.setState({isAuth: true})
            return this.state.isAuth
        } else if (loginResponse.status === 403) {
            this.setState({isAuth: false})
            return this.state.isAuth
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isAuth === true ?
                        this.props.children
                        : this.state.isAuth === false ?
                            <Navigate to={'/'} replace={true}/>
                            :
                            null
                }
            </>
        );
    }
}
export default ProtectedRoute