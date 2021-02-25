import React from "react";
import ExerciseForm from "../components/ExerciseForm/index";
import Card from "../components/Card/index";
class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rigthColor: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm">
          <ExerciseForm
            onChange={this.handleChange}
            form={this.state.form}
          ></ExerciseForm>
        </div>
      </div>
    );
  }
}

export default ExerciseNew;
