import '@babel/polyfill';
import './advanced-6';
import { getMovies } from './http';
/*
 * Chunks
 */



document.addEventListener('DOMContentLoaded', () => {

    btnSearch.addEventListener("click", e => {
        list.innerHTML = '';
        getMovies(searchFilm.value, res => {

            res.Search.forEach(i => {
                console.log(i);
                let item = document.createElement('li');
                item.className = 'item';
                let imgWrap = document.createElement('div');
                imgWrap.classList = 'imgWrap';
                let tytleWrap = document.createElement('div');
                tytleWrap.classList = 'tytleWrap';
                let movieTitle = document.createElement('h4');
                let movieType = document.createElement('p');
                let movieYear = document.createElement('p');
                imgWrap.style.backgroundImage = `url(${i.Poster})`;
                imgWrap.style.backgroundSize = "cover";
                movieTitle.innerHTML = i.Title;
                movieType.innerHTML = i.Type;
                movieYear.innerHTML = i.Year;
                tytleWrap.append(movieTitle);
                item.append(imgWrap);
                item.append(tytleWrap);
                item.append(movieType);
                item.append(movieYear);
                list.append(item);

            })


        });

    })




});