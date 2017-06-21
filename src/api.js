/**
 * Created by aakas on 20-06-2017.
 */
import axios from 'axios';

export const fetchContest = contestId => {
    return axios.get('/api/contests/' + contestId)
        .then(resp => resp.data);
};

export const fetchContestList = contestId => {
    return axios.get('/api/contests/')
        .then(resp => resp.data.contests);
};

export const fetchNames = nameIds => {
    console.log('***I******/api/names/' + nameIds.join(','));
    return axios.get('/api/names/' + nameIds.join(','))
        .then(resp => resp.data.names)
        .catch(console.error);
};