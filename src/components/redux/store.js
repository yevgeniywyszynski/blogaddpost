import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import thunk from 'redux-thunk'
import postsRedux from '../redux/PostRedux';

const initialState = {
    postStore: {
        allPost: [
            {
              id: 1,
              title: 'O co chodzi z React Hooks?',
              tresc: 'Zacznijmy od początku, czyli czym są React Hooks (a w wersji spolszczonej – Hooki). Hooki to funkcje, które zawierają w sobie akcje odpowiedzialne za stan komponentu oraz jego tzw. lifecycle methods. Dzięki temu możemy korzystać w komponentach bezstanowych z metod dostępnych wcześniej tylko dla klas. W praktyce oznacza to tyle, że jeśli chcemy dodać do komponentu bezstanowego jakieś zachowania reagujące na stan – możemy to zrobić. Nie musimy przepisywać całego komponentu bezstanowego na klasę, jak trzeba było to robić wcześni.Hooki pozwalają nam zachować prosty układ komponentów, a jednocześnie używać dobrodziejstw stanu. Nasz kod może więc reagować na wszystkie lifecycle methods (takie jak np. componentDidMount czy componentDidUpdate) oraz zmieniać stan np. na kliknięcie na dany element. ',
              data_dodania: '2022-01-25T23:00:00.000Z'
            },
            {
              id: 3,
              title: 'How To Start A Blog In 2022',
              tresc: 'One of the misconceptions about starting a blog is that you need to be a great writer to be successful. Nothing could be further from the truth. People read blog sites to get a personal perspective on things, so most bloggers write in a very informal and conversational style.\n\nAnd because of the format, many successful bloggers will write about a variety of topics on the same blog.\n\nIn addition, you don’t need to be an expert on any of the topics you write about to have a successful blog. For example, visitors to a cooking blog don’t want to read a textbook from a food scientist, they want to hear the experiences of someone who has actually cooked some real meals, mistakes and all.\n\nTo be successful as a blogger there is really just one requirement: a passion for your topic.\n\nAt its heart, blogging is about sharing your knowledge with the world. Writing about things that you are passionate about makes the process of starting a successful blog so much easier. As long as you are writing about things that you are genuinely interested in, your passion will shine through and keep your visitors interested.\n\n',
              data_dodania: '2021-08-22T22:00:00.000Z'
            },
            {
              id: 2,
              title: 'PostgreSQL: serial vs identity',
              tresc: 'serial is the "old" implementation of auto-generated unique values that has been part of Postgres for ages. However that is not part of the SQL standard.\n\nTo be more compliant with the SQL standard, Postgres 10 introduced the syntax using generated as identity.\n\nThe underlying implementation is still based on a sequence, the definition now complies with the SQL standard. One thing that this new syntax allows is to prevent an accidental override of the value.\n\nConsider the following tables:',
              data_dodania: '2021-06-04T22:00:00.000Z'
            },
            {
              id: 4,
              title: 'Filebeat vs. Logstash: The Evolution of a Log Shipper',
              tresc: 'Anyone using ELK for logging should be raising an eyebrow right now. How can these two tools even be compared to start with? Yes, both Filebeat and Logstash can be used to send logs from a file-based data source to a supported output destination. But the comparison stops there. In most cases, we will be using both in tandem when building a logging pipeline with the ELK Stack because both have a different function.\n\nSo, why the comparison?\n\nWell, people are still getting confused by the differences between the two log shippers. With the introduction of Beats, the growth in both their popularity, and the number of use cases, people are inquiring whether the two are complementary or mutually exclusive. The new Filebeat modules can handle processing and parsing on their own, clouding the issue even further.\n\nThis post will attempt to shed some light on what makes these two tools both alternatives to each other and complementary at the same time by explaining how the two were born and providing some simple examples.',
              data_dodania: '2020-07-23T22:00:00.000Z'
            }
          ],
        request: {},
    }
}

const reducers = {
    postStore: postsRedux,
}

const storeReducer = combineReducers(reducers)

const store = createStore (
    storeReducer,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store

