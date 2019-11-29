# day 4

counter app

SPA(Single Page Application)

1. developer menu(debugging)
    - cmd + d
    - cmd + r
1. [javascript class](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)
1. React class components with All lifecycle
1. lifecycle functions
    - create component: constructor → getDerivedStateFromProps → render → componentDidMount
    - change props: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
    - change state: shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
    - error when component render: componentDidCatch
    - remove component: componentWillUnmount
1. Functional components with lifecycle(react 16.0, RN 0.60)
    - useEffect
1. homework
    - make couter app to class components
}