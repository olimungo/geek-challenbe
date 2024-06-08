import { Person, sortPeople } from 'models';

export const getPerson = async (id: string) => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/${id}`).then((response) => response.json());
};

export const getPeople = (from: number, recordsCount: number) => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people?from=${from}&recordsCount=${recordsCount}`)
        .then((response) => response.json())
        .then((people: Person[]) => people.sort(sortPeople));
};

export const searchPeople = (pattern: string) => {
    if (pattern) {
        return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/search/${pattern}`)
            .then((response) => response.json())
            .then((people: Person[]) => people.sort(sortPeople));
    } else {
        return new Promise<Person[]>((resolve) => resolve([]));
    }
};

export const updatePerson = (person: Person) => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/${person.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    }).then((response) => response.json());
};

export const deletePerson = (id: string) => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/${id}`, { method: 'DELETE' });
};

export const uploadAvatar = (id: string, data: FormData) => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/avatar/${id}`, {
        method: 'POST',
        body: data,
    });
};

export const createPeople = (count: number, withAvatar: boolean) => {
    return fetch(
        `${process.env.REACT_APP_BACK_END_URL}/people/create?count=${count}&withAvatar=${withAvatar}`
    );
};

export const deletePeople = () => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/delete`);
};

export const countPeople = () => {
    return fetch(`${process.env.REACT_APP_BACK_END_URL}/people/count`).then(async (response) => await response.json());
};
