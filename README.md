
# Zero

> Zero is a zero fuss dependancy injection container

## Installation
```
npm i @joduplessis/zero
```

## Some example usage:
```
Zero.container().inject('AccountService', AccountService)

const AccountService = Zero.container().get('AccountService')
```
