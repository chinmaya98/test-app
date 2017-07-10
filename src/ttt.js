import Formsy from 'formsy-react';
import {Input} from 'formsy-react-components';
 class FormsyForm extends React.Component {
  enableButton() {
    this.setState({canSubmit: true});
  }
  disableButton() {
    this.setState({canSubmit: true});
  }
  submit(model) {
    FormActions.saveEmail(model.email);
  }
  render() {
    return (
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <Input
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required/>
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy.Form>
  )}
}
export default App
