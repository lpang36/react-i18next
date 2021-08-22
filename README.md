This is a fork of react-i18next. It modifies the `Trans` component to automatically detect text rendered by anything wrapped inside it and try to translate it. Importantly, it cannot detect text nested inside components, e.g. 

```
const Foo = (props) => {
  return <Trans>
    <div>
      Baz
    </div>
    <Bar>
    </Bar>
  </Trans>
}
```

In the above example, anything rendered by `Bar` will not be translated, but anything rendered by `Foo` directly will, like the string `Baz`. To simplify this wrapping process, we add a function WithTrans, which adds the `Trans` component automatically. So this is equivalent to the above example:

```
const Foo = WithTrans((props) => {
  return <>
    <div>
      Baz
    </div>
    <Bar>
    </Bar>
  </>
})
```
