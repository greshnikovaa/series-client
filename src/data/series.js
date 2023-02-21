import imgHarry from '../assets/img/harryPotter.jpg'
import imgGamesOfTrons from '../assets/img/gamesOfTrones.jpg'
import imgGravity from '../assets/img/graviityFalz.jpg'
import imgHunger from '../assets/img/hungerGames.jpg'
import imgPony from '../assets/img/myLittlePony.jpg'
import imgShadow from '../assets/img/shadowHunters.jpg'
import imgSherlock from '../assets/img/Sherlock.jpg'
import imgWitcher from '../assets/img/witcher.jpg'

const dataSeries = [
    {
        _id: 1,
        title: 'Гарри Поттер',
        info: ' После того, как родители Гарри погибли, его воспитанием занимаются дядя и тетя. В свой одиннадцатый день рождения он узнает,что является самым настоящим волшебником, и его приглашают учиться в Хогвартскую школу магии. Именно там, от одного из преподавателей, Гарри узнает истинную правду о своем прошлом, и что его родители на самом деле были убиты лордом Волан-де-Мортом – сильнейшим темным магом, из когда либо существовавших. Поступив в необычную школу, герой с головой погружается в мир магии и волшебства, даже не представляя какие испытания ждут его впереди.',
        cover: imgHarry,
        rating: 8.3,
        genre: 'fantasy',
        year: 2001,
        country: 'UK',
        category: 'movie',
        actors: ['Дэниэл Рэдклифф', 'Руперт Гринт', 'Эмма Уотсон']
    },
    {
        _id: 2,
        title: 'Игра Престолов',
        info: 'После восстания, спровоцированного действиями безумного правителя Вестероса, Роберт из дома Баратеонов восседает на Железный трон, став новым правителем Семи королевств. Годы спустя Джон Аррен, десница короля, умирает, а Роберт отправляется в поход, чтобы заручиться поддержкой друга детства — Эддарда Старка, Хранителя Севера. Честолюбивому и благородному главе дома Старков поручено покинуть родную обитель и стать новым десницей короля. Тайно предупрежденный о том, что Аррен на самом деле был убит, а Роберт может стать следующей жертвой, Эддард пытается исправить ситуацию, но политические интриги, заговоры, убийства и обострившаяся борьба за Железный трон приводят к масштабным потрясениям в Вестеросе.',
        cover: imgGamesOfTrons,
        rating: 9.2,
        genre: 'fantasy',
        year: 2011,
        country: 'USA',
        category: 'series',
        actors: ['Питер Динклэйдж', 'Лина Хиди', 'Эмилия Кларк']
    },
    {
        _id: 3,
        title: 'Гравити Фолз',
        info: 'Сюжет повествует про 12-летних брата и сестру Диппера и Мэйбл Пайнс, которые ожидали, что проведут летние каникулы в кругу друзей, но родители отправили их в тихий городок Гравити Фолз, штат Орегон, где приживал их немного чудаковатый двоюродный дедушка Стэн. Старик владел небольшим магазином сувениров под интригующим названием «Хижина Загадок», куда изредка заглядывали заблудившиеся туристы. Когда школьники думали, что им предстоит пережить худшее лето в их жизни, они случайно обнаружили в лесу потрепанный дневник с записями аномалий и сверхъестественных событий этого города. ',
        cover: imgGravity,
        rating: 8.9,
        genre: 'comedy',
        year: 2012,
        country: 'USA',
        category: 'cartoon',
        actors: ['Джейсон Риттер', 'Алекс Хирш', 'Кристен Шаал']
    },
    {
        _id: 4,
        title: 'Голодные игры',
        info: 'Действия фильма происходят в далеком будущем, где на руинах Северной Америки расположена страна Панем. Она поделена на двенадцать дистриктов, в которых каждый год в лотерее под названием «Жатва» выбираются молодые люди, возрастом от двенадцати до восемнадцати лет, для участия в Голодных играх. На этих играх участники сражаются между собой до смерти, пока не останется только один. Победитель в награду получает славу и богатство. Китнисс Эвердин – шестнадцатилетняя девушка, живущая в двенадцатом дистрикте. Она добровольно вызывается на участие в Голодных играх, чтобы заменить свою младшую сестру.',
        cover: imgHunger,
        rating: 7.2,
        genre: 'fantasy',
        year: 2012,
        country: 'USA',
        category: 'movie',
        actors: ['Дженнифер Лоуренс', 'Джош Хатчерсон', 'Вуди Харрельсон']
    },
    {
        _id: 5,
        title: 'Май литтл пони',
        info: 'В волшебном королевстве Эквестрия, населенном разноцветными пони, живет Сумеречная Искорка — слегка замкнутый единорожек, стремящаяся развивать свои магические способности. Однажды ее наставница, принцесса Селестия, поручает героине крайне важную задачу: отправиться в Понивилль на поиски новых друзей.',
        cover: imgPony,
        rating: 7.7,
        genre: 'comedy',
        year: 2010,
        country: 'USA',
        category: 'cartoon',
        actors: ['Эшли Болл', 'Тара Стронг', 'Андреа Либман']
    },
    {
        _id: 6,
        title: 'Сумеречные охотники',
        info: 'Празднуя своё восемнадцатилетние, Клэри Фрэй, обычная, ничем не выделяющаяся девушка, внезапно для себя узнаёт, что она принадлежит к загадочному роду Сумеречных Охотников – таинственной организации, стоящей на защите людей от демонов, посланников зла, порождений тьмы и прочей нечести, принявшей людские обличия и заполонившей в последнее время весь белый свет. Во время столкновения, происходящем в ночном клубе, между охотниками и демонами, Клэри случайно убивает одного из молодых парней, оказавшегося в результате чудовищем. Не в силах понять, что происходит, девушка приходит за ответами к матери, но та, чувствуя надвигающуюся опасность, телепортирует Клэри из квартиры. И теперь нашей героине предстоит окончательно выяснить тайну своего происхождения, а так же с помощью сумеречного охотника Джейса и своего друга Саймона попытаться отыскать пропавшую мать.',
        cover: imgShadow,
        rating: 7.5,
        genre: 'fantasy',
        year: 2016,
        country: 'USA',
        category: 'series',
        actors: ['Кэтрин МакНамара', 'Доминик Шервуд', 'Мэттью Даддарио', 'Эмерод Тубия']
    },
    {
        _id: 7,
        title: 'Шерлок',
        info: 'Сериал снят про всех нам известных героев из произведения Артура Конан Дойля, Шерлока Холмса и его верного помощника доктора Джона Ватсона. Однако теперь действие перенесено в наши дни. Ватсон, прошедший войну в Афганистане, военный врач, а Шерлок Холмс консультирующий детектив. Детектив ищет соседа по квартире, и так знакомится с Ватсоном. Они находят жилье и селятся на Бейкер-стрит в доме 221-б, у уже не молодой хозяйки миссис Хадсон. В Лондоне начинают происходить необъяснимые убийства, Скотланд-Ярд бессилен. Шерлок и Джон помогают полиции в раскрытии сложных и запутанных дел.',
        cover: imgSherlock,
        rating: 9.1,
        genre: 'detective',
        year: 2010,
        country: 'UK',
        category: 'series',
        actors: ['Бенедикт Камбербэтч', 'Мартин Фриман', 'Уна Стаббс']
    },
    {
        _id: 8,
        title: 'Ведьмак',
        info: 'Действие сериала, основанного на одноименной фэнтези-саге Анджея Сапковского, разворачивается вокруг ведьмака Геральта из Ривии — наемника-мутанта, который специализируется на уничтожении чудовищ и ведет кочевой образ жизни, стараясь найти собственное место в жестоком мире. Однако когда судьба сводит Геральта с могущественной чародейкой Йеннифэр и юной принцессой Цириллой из Цинтры, хранящей мрачный секрет, ведьмак оказывается втянут в жестокое противостояние между двумя воинственно настроенными народами, борющимися за власть над обширными землями.',
        cover: imgWitcher,
        rating: 8.1,
        genre: 'fantasy',
        year: 2019,
        country: 'Poland',
        category: 'series',
        actors: ['Генри Кавилл', 'Фрейя Аллан', 'Аня Чалотра']
    },
]

export default dataSeries;