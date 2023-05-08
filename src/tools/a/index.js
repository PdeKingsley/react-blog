import useSWR from 'swr';
import axios from 'axios';

function A() {
    const { data, error, isLoading } = useSWR('https://api.apilayer.com/spotify/search?q=Harrys', get)

    if (error) return <div>load failed</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data}!</div>
}

function get(url){
    let myHeaders = new Headers();
    myHeaders.append("apikey", "kxqei4hVIyKUoeCPRZkH3Z6NU7p6wZDh");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default A;