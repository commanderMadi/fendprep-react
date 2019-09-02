import React from "react";
import "../styles/style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      userName: "",
      password: "",
      errors: [],
      resolved: ""
    };
  }

  onChangeFullName = e => {
    const fullName = e.target.value;
    this.setState(() => ({ fullName }));
  };

  onChangeEmail = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onChangeUserName = e => {
    const userName = e.target.value;
    this.setState(() => ({ userName }));
  };

  onChangePassword = e => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  validateInputs() {
    if (!this.state.email) {
      const emailEmpty = "Email cannot be left blank.";
      const id = "email-empty";
      this.setState(prevState => ({
        errors: prevState.errors.concat({ id, msg: emailEmpty })
      }));
    }

    if (!this.state.userName) {
      const userNameEmpty = "Username cannot be left blank.";
      const id = "username-empty";
      this.setState(prevState => ({
        errors: prevState.errors.concat({ id, msg: userNameEmpty })
      }));
    }

    if (!this.state.password) {
      const passwordEmpty = "Password cannot be left blank.";
      const id = "password-empty";
      this.setState(prevState => ({
        errors: prevState.errors.concat({ id, msg: passwordEmpty })
      }));
    }

    if (this.state.password && this.state.password.length < 8) {
      const passwordShort = "Your password must be 8 characters at least.";
      const id = "password-short";
      this.setState(prevState => ({
        errors: prevState.errors.concat({ id, msg: passwordShort })
      }));
    }
    return false;
  }

  onFormSubmit = e => {
    e.preventDefault();
    // clear all (if any) errors on each form submit
    this.setState(() => ({ errors: [] }));

    this.validateInputs();

    if (this.state.email && this.state.userName && this.state.password.length >= 8) {
      const api_url ="https://private-7e7394-udacityfrontendtest.apiary-mock.com/signup";
      fetch(api_url, {
        method: "POST",
        body: JSON.stringify({
          username: this.state.userName,
          password: this.state.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(jsonData => this.setState(() => ({ resolved: jsonData })))
        .catch(err => new Error("Something wrong happend" + err));
      this.setState(() => ({ errors: [] }));
    }
  };

  render() {
    return (
      <section className="container">
        <section className="row">
          <h2 className="signup-title mt-1 ml-2">Create an Account</h2>
        </section>

        {this.state.errors.length > 0 && (
          <section className="mt-4 mb-4 row alert alert-danger">
            {" "}
            <p className="col-md-12">The following errors have occurred:</p>
            {this.state.errors.map(error => {
              return (
                error && (
                  <p className="col-md-12" key={error.id}>
                    {error.msg}
                  </p>
                )
              );
            })}
          </section>
        )}
        <form
          className="mt-3"
          onSubmit={this.onFormSubmit}
          aria-label="Sign Up"
          id="signup-form"
        >
          <section className="form-group">
            <label htmlFor="fullname">Full Name (Optional)</label>
            <input
              onChange={this.onChangeFullName}
              type="text"
              id="fullname"
              className="form-control form-control-lg"
              tabIndex="1"
            />
          </section>

          <section className="form-group">
            <label className="mandatory" htmlFor="email">
              Email
            </label>
            <input
              onChange={this.onChangeEmail}
              className="form-control form-control-lg"
              aria-required="true"
              type="email"
              id="email"
              data-err-message="Email cannot be left blank"
              data-err-field="email-empty-error"
              tabIndex="2"
            />
            <label id="email-empty-error"></label>
          </section>

          <section className="form-group">
            <label className="mandatory" htmlFor="username">
              Username
            </label>
            <input
              onChange={this.onChangeUserName}
              className="form-control form-control-lg"
              aria-required="true"
              type="text"
              id="username"
              data-err-message="Username cannot be left blank"
              data-err-field="username-empty-error"
              tabIndex="3"
            />
            <label id="username-empty-error"></label>
          </section>

          <section className="form-group">
            <label className="mandatory" htmlFor="password">
              Password
            </label>
            <input
              onChange={this.onChangePassword}
              className="form-control form-control-lg"
              aria-required="true"
              type="password"
              id="password"
              data-err-message="Password cannot be left blank"
              data-err-field="password-empty-error"
              tabIndex="4"
            />
            <label id="password-empty-error"></label>
          </section>
          <input
            type="submit"
            className="btn btn-primary"
            value="Sign Up"
            tabIndex="5"
          />
        </form>
        <section className="row">
          <p className="note text-muted mt-2 col-12">
            Fields that are marked with * are mandatory fields.
          </p>
        </section>
        {this.state.errors.length === 0 && this.state.resolved.message && (
          <section className="mt-4 row alert alert-danger">
            <p className="text-center user-creation">
              {this.state.resolved.message}
            </p>
          </section>
        )}
      </section>
    );
  }
}

export default Form;
