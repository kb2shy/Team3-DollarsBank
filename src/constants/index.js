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
        acctType: "Checking",
        balance: 0
    },
    {
        acctId: "012345678",
        userId: 1,
        acctType: "Savings",
        balance: 0
    }
]

export const TRANSACTIONS = [
    {
        transactionId: 300,
        acctId: "123456789",
        userId: 1,
        action: "deposit",
        amount: 100,
        date: "2020-09-09T09:00:00.000"
    },
    {
        transactionId: 301,
        acctId: "123456789",
        userId: 1,
        action: "withdrawal",
        amount: 10,
        date: "2020-09-12T16:00:00.000"
    },
    {
        transactionId: 302,
        acctId: "012345678",
        userId: 1,
        action: "deposit",
        amount: 10000,
        date: "2020-09-09T09:00:00.000"
    },
    {
        transactionId: 303,
        acctId: "012345678",
        userId: 1,
        action: "withdrawal",
        amount: 100,
        date: "2020-09-12T09:00:00.000"
    },
    {
        transactionId: 304,
        acctId: "123456789",
        userId: 1,
        action: "deposit",
        amount: 100,
        date: "2020-09-13T09:00:00.000"
    },
    {
        transactionId: 305,
        acctId: "123456789",
        userId: 1,
        action: "withdrawal",
        amount: 10,
        date: "2020-09-12T10:00:00.000"
    },
    {
        transactionId: 306,
        acctId: "123456789",
        userId: 1,
        action: "deposit",
        amount: 100,
        date: "2020-09-12T10:10:00.000"
    },
    {
        transactionId: 307,
        acctId: "123456789",
        userId: 1,
        action: "withdrawal",
        amount: 10,
        date: "2020-09-13T16:30:00.000"
    }
]