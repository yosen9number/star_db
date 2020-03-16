import React, {Component} from "react";
import Spinner from "../spiner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidUpdate (prevProps) {
            if (this.props.getDate !== prevProps.getDate) {
                this.update();
            }
        }

        componentDidMount () {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }

        render () {

            const { data, loading, error } = this.state;

            if (loading) {
                return <Spinner className="spinner"/> ;
            }
            if (error) {
                return <ErrorIndicator/> ;
            }

            return <View {...this.props} data={ data } />
        }
    };
};

export default withData;
