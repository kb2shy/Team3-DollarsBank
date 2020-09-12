export const URI = "http://localhost:8080";

export const USER = {
    userId: 1,
    firstName: "Chhaian",
    lastName: "Pin",
    email: "test@email.com",
    password: "1234"
}

export const ACCOUNTS = [
    {
        acctId: "123456789",
        userId: 1,
        acctType: "checking",
        balance: 100
    },
    {
        acctId: "012345678",
        userId: 1,
        acctType: "Savings",
        balance: 10000
    }
]

export const TRANSACTIONS1 = [
    {
        transactionId: 300,
        fromAccountId: "111111111",
        toAccountId: "123456789",
        userId: 1,
        action: "deposit",
        amount: 100
    },
    {
        transactionId: 301,
        fromAccountId: "123456789",
        toAccountId: "111111111",
        userId: 1,
        action: "withdrawal",
        amount: 10
    },
]

export const TRANSACTIONS2 = [
    {
        transactionId: 302,
        fromAccountId: "111111111",
        toAccountId: "012345678",
        userId: 1,
        action: "deposit",
        amount: 50
    },
    {
        transactionId: 304,
        fromAccountId: "012345678",
        toAccountId: "111111111",
        userId: 1,
        action: "withdrawal",
        amount: 100
    }
]