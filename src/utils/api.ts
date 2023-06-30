import {urls} from '../config/urls';
import queryString from 'query-string';
import {Student} from '../types/types';

export const getAllStudents = (limit: number = 5, skip: number = 0) => {
  const query = queryString.stringify({limit, skip});
  return fetch(urls.getAllStudents + '?' + query)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

export const getStudentsById = (id: string) => {
  return fetch(urls.getAllStudents + '/' + id)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

export const searchStudents = (
  name: string,
  limit: number = 5,
  skip: number = 0,
) => {
  const query = queryString.stringify({
    q: name,
    limit,
    skip,
  });
  return fetch(urls.searchStudents + '?' + query)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

export const addStudents = (student: Student) => {
  return fetch(urls.addStudents, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(student),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

export const updateStudents = (student: Student) => {
  return fetch(urls.getAllStudents + '/' + student.id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(student),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};

export const deleteStudents = async (id: number) => {
  fetch(urls.getAllStudents + '/' + id, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(console.log);
};
