import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Label = Styled.Text``;

interface Props {}
interface State {
  error: Boolean;
}
export default class ClassComponents extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('constructor');
    this.state = {
      error: false,
    };
  }
  render() {
    console.log('render');
    const {error} = this.state;
    return <Container>{!error && <Label>Test</Label>}</Container>;
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log('getSnapshotBeforeUpdate');
    return {testData: true};
  }
  componentDidUpdate(prevProps: Props, prevState: State, snapshot) {
    console.log('componentDidUpdate');
  }
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
}
