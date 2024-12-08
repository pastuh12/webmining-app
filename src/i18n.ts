import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        name: 'Tarasov Ilya',
        resumeTitle: 'Resume',
        biography: 'Biography',
        resume_header: 'Resume page',
        biography_header: 'Biography page',
        abstract: 'Abstract',
        library: 'Library',
        links: 'Links',
        searchReport: 'Search Report',
        customSection: 'Custom Section',
        text: {
          d: 'ddddd',
        },
        report: `
        <h1>Report</h1>
        <h3>Meeting</h3>
<p>
        <ol>
          <li>
            <a href="#start">Introduction</a>
          </li>
          <li>
            <a href="#relevant">Actual installation information</a>
          </li>
          <li>
            <a href="#recommendations">
Rules and recommendations that promote proper construction
              microservice architecture
            </a>
          </li>
          <li>
            <a href="#diagram">
Diagram and description of the microservice architecture of the information system
              educational process management
            </a>
          </li>
          <li>
            <a href="#security">Security, automation</a>
          </li>
          <li>
            <a href="#services">Managing projects one after the other</a>
          </li>
          <li>
            <a href="#features">Opportunities for system improvement</a>
          </li>
          <li>
            <a href="#end">Completion</a>
          </li>
          <li>
            <a href="#links">List of sources used</a>
          </li>
        </ol>
      </p>
      <div id="start">
<h3>Introduction</h3>
<p>
          Building a microservice architecture (MSA) from scratch, which has
          the greatest number of advantages of microservices is
          a non-trivial task. The design of such an architecture requires
          conduct a thorough analysis and planning. It is necessary to define
          service boundaries to minimize interdependencies and ensure
          the autonomy of each microservice. This is a difficult task because
          incorrect definition of boundaries can lead to significant
          problems in the future.
        </p>
        <p>
          Data management in a microservice architecture also represents
          a challenge. The data is often distributed between different services, which means
          requires the development of strategies to manage data consistency,
          transactions and data integrity. Interaction of microservices via
          the network can lead to increased delays and the need for management
          network security, load balancing, and fault tolerance.
        </p>
        <p>
          Ensuring security in a microservice architecture requires
          additional measures such as authentication and authorization at the
          services, data encryption in transit and in storage, as well as
          secret management. Testing microservices is more difficult than
monolithic applications, as it is necessary to test as separate ones
          services and their interaction with each other. This requires
          using various approaches such as contract testing and
          integration testing.
        </p>
      divisions
      <element id="actual">
<h3>Actual installation information</h3>
<p>
          Usually, educational process management systems allow you to simplify
          performing complex processes such as: data management of subjects
          educational activities, content management and its analysis,
          designing an individual educational trajectory, planning
          the educational process, the implementation of the educational process and its
          control.
        </p>
        <p>
          A system of such complexity, implemented not on a microservice
          architecture, faces a number of significant problems that can
          significantly affect its effectiveness and flexibility. One of the main
          The problem is the solidity of the system, which makes it difficult
          scaling and upgrading. In a monolithic architecture, everything is
          the components of the system are closely interconnected, which makes it difficult
          making changes or adding new features without risk of disruption
          the work of the entire system. This leads to the fact that any updates require
          significant effort and time, as well as thorough testing, to
          avoid crashes.
        </p>
        <p>
          In addition, the lack of a microservice architecture limits
          the possibility of independent development and deployment of individual
          system components. In a microservice architecture, each service can
          to be developed, tested and deployed independently of others that
          allows you to respond more quickly to changes and needs
          users. In a monolithic system, any change requires
          coordination between different development teams, which slows down
          the process increases the probability of errors.
        </p>
        <p>
          Another problem is the difficulty of scaling the system. In
a microservice architecture, only those components can be scaled,
          which really need additional resources, whereas in
a monolithic system you have to scale the entire system. This
          leads to inefficient use of resources and increased costs
          on infrastructure. In addition, microservices allow you to use
          different technologies and programming languages for different components,
          what makes it possible to choose the optimal tools for solving
          specific tasks. In a monolithic system, all components must be
          written in the same language and using the same technology platform,
          which limits flexibility and optimization options.
        </p>
        <p>
          Thus, if when designing a control system
          the educational process should use the principles of microservice
          architecture, then its further development and support will take place
          faster and easier.
        </p>
      divisions
      <section id="recommendations">
<h3>
          Rules and recommendations for proper construction
          microservice architecture
        </h3>
        <p>
          When building a microservice architecture, it is important to know and apply
          there are several rules that will allow you to avoid
          to lose the benefits received from microservices [1].
          <ul>
            <li>
              Separation of contexts by specific business tasks: each
              the microservice should be responsible for a separate business function, which
              helps to minimize interdependencies and facilitates management
              services, ensuring their autonomy and independence. This
              this means that each service must have its own data and
              do not depend on other services to complete your tasks.
            </li>
            <li>
              The interaction of services takes place according to the specified interfaces: these are
              allows you to easily replace or update services without disruption
              the work of the entire system.
            </li>
            <li>
              Decentralized data management: every microservice must
              manage your own data, which helps
to avoid bottlenecks and improves the scalability of the system.
            </li>
            <li>
              Ensuring security at the level of each microservice: each
              The service must be responsible for the safety of its data. This includes
              includes authentication, authorization, and data encryption.
            </li>
          </ul>
        </p>
        <p>
          Following these rules will help you create an efficient, scalable and
          a stable microservice architecture that will be easily managed
          and develop.
        </p>
      divisions
      <element id="schema">
<h3>
          Diagram and description of the microservice architecture of the information system
          educational process management
        </h3>
        <p>
          Following the above rules, the architectural
          the scheme of the educational process management information system.
          The diagram is shown in Figure 1.
        </p>
                <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/architecture.png"
            alt="Описание изображения"
            width="300"
          />
          <figcaption>
            Figure 1 – ISA diagram for the information management system diagram
            the educational process
          </figcaption>
        </figure>
        <p>
          The concept of a microservice architecture for a learning management system
          the process at the university involves dividing the system into separate ones
          contexts, each of which is responsible for a specific business task.
        </p>
        <p>
          The system was divided into the following contexts, corresponding to
          delivered business functionality:
          <ul>
            <li>
              Maturity assessment: of interest to management
              data on the maturity of ML subjects (students and teachers):
              portfolio, competence profile, digital maturity passport, and
              the university as a whole;
            </li>
            <li>
              Content management: optimizes the user interface of the software
              analysis of educational content. Provides opportunities for
              introduction, real-time monitoring of quality and analytics
              educational content in a structured form;
            </li>
            <li>
              Designing an individual educational trajectory: the goal
              the student is trained with the support of a curator and using
        `,
        fuc: 'Faculty of Computer Technology and Applied Mathematics',
        kaf: 'Department of Information Technology',
        spec: 'Specialty: "Technologies of programming and development of information and communication systems"',
        dis: 'Dissertation: A study of the reliability characteristics of digital educational environment with micro service architecture',
        prep: 'Teacher: Associate professor of the department Alexey Nikolaevich Poletaykin',
        resume: {
          fio: 'Full Name',
          fiov: 'Tarasov Ilya Andreevich',
          date: 'Date of Birth',
          datev: '08/04/2001',
          birth: 'Place of Birth',
          birthv: 'Krasnodar, Russian Federation',
          school: 'School',
          schoolv: '2008-2019: MBOU Lyceum No. 4, Grades 1-11',
          vus: 'University',
          vusv: "2019-2023: Bachelor's degree at Kuban State University",
          len: 'Language Proficiency',
          lenv: 'Russian – Native, English – Intermediate',
          hob: 'Hobbies',
          hobv: 'Books (Russian classics, science fiction, classical literature), Music (rock, classical, romances, electronic music), Cinema (Detective)',
          lich: 'Personal Qualities',
          lichv:
            'task delegation, ability to listen, teamwork, critical thinking, attentiveness, punctuality',
          compSpec: 'Professional Specialization and Computer Skills',
          leng: 'Programming Languages',
          paradig: 'Programming Paradigms',
          oop: 'OOP',
          future: 'Future Plans',
          futurev:
            'Further professional and career development as a software developer, including learning new programming methodologies and patterns, frameworks, technologies, and programming languages, exploring as many places in Russia as possible',
          workExp: 'Work Experience',
          workExpv1: 'Fojin, Node.js Developer, 0.5 years',
          workExpv2: 'Brusnika, Fullstack Developer, 1.5 years',
        },
      },
    },
    ru: {
      translation: {
        prep: 'Преподаватель: доц. кафедры Полетайкин Алексей Николаевич',
        dis: 'Диссертация: Исследование надежностных характеристик цифровой образовательной среды с микросервисной архитектурой',
        spec: 'Специальность: «Технологии программирования и разработки информационно-коммуникационных систем»',
        name: 'Тарасов Илья',
        fuc: 'Факультет компьютерных технологий и прикладной математики',
        kaf: 'Кафедра информационных технологий',
        resumeTitle: 'Резюме',
        biography: 'Биография',
        resume_header: 'Главная страница',
        biography_header: 'Биография',
        abstract: 'Реферат',
        library: 'Библиотека',
        links: 'Ссылки',
        searchReport: 'Отчет о поиске',
        customSection: 'Индивидуальный раздел',
        text: {
          d: 'ddddd',
        },
        resume: {
          fio: 'ФИО',
          fiov: 'Тарасов Илья Андреевич',
          date: 'Дата рождения',
          datev: '04.08.2001',
          birth: 'Место рождения',
          birthv: 'г. Краснодар, Российская Федерация',
          school: 'Школа',
          schoolv: '2008-2019 гг.: МБОУ лицей №4, 1-11 класс',
          vus: 'ВУЗ',
          vusv: '2019-2023 гг.: бакалавриат КубГУ',
          len: 'Владение языками',
          lenv: 'Русский – родной, Английский – средний уровень',
          hob: 'Увлечения',
          hobv: 'Книги (русская классика, научная фантастика, классическая литература), Музыка (рок, классика, романсы, электронная музыка), Кинематограф (Детектив)',
          lich: 'Личные качества',
          lichv:
            'делегирование задач, умение слушать собеседника, работа в команде, критичность, внимательность, пунктуальность',
          compSpec: 'Профессиональная специализация и владение компьютером',
          leng: 'Языки программирования',
          paradig: 'Парадигмы программирования',
          oop: 'OOP',
          future: 'Планы на будущее',
          futurev:
            'Дальнейшее профессиональное и карьерное развитие в качестве разработчика ПО, в том числе изучение новых методик и паттернов программирования, фреймворков, технологий и языков программирования, исследовать настолько много мест в России, насколько это возможно	Дальнейшее профессиональное и карьерное развитие в качестве разработчика ПО, в том числе изучение новых методик и паттернов программирования, фреймворков, технологий и языков программирования, исследовать настолько много мест в России, насколько это возможно',
          workExp: 'Опыт работы',
          workExpv1: 'Fojin, Nodejs разработчик, 0.5 года',
          workExpv2: 'Брусника, Fullstack разработчик, 1.5 года',
        },
        report: ` <h1>Реферат</h1>
      <h3>Содержание</h3>
      <p>
        <ol>
          <li>
            <a href="#start">Введение</a>
          </li>
          <li>
            <a href="#actual">Актуальной поставленной задачи</a>
          </li>
          <li>
            <a href="#recommendations">
              Правила и рекомендации, способствующие правильному построению
              микросервисной архитектуры
            </a>
          </li>
          <li>
            <a href="#schema">
              Схема и описание микросервисной архитектуры информационной системы
              управления образовательным процессом
            </a>
          </li>
          <li>
            <a href="#safety">Безопасность, аутентификация и авторизация</a>
          </li>
          <li>
            <a href="#services">Взаимодействие сервисов друг с другом</a>
          </li>
          <li>
            <a href="#opportunities">Возможности для улучшения системы</a>
          </li>
          <li>
            <a href="#end">Заключение</a>
          </li>
          <li>
            <a href="#links">Список используемых источников</a>
          </li>
        </ol>
      </p>
      <div id="start">
        <h3>Введение</h3>
        <p>
          Построение микросервисной архитектуры (МСА) с нуля, которая обладает
          наибольшим количеством преимуществ микросервисов, является
          нетривиальной задачей. Для проектирование такой архитектуры требуется
          провести тщательный анализ и планирование. Необходимо определить
          границы сервисов, чтобы минимизировать взаимозависимости и обеспечить
          автономность каждого микросервиса. Это сложная задача, так как
          неправильное определение границ может привести к значительным
          проблемам в будущем.
        </p>
        <p>
          Управление данными в микросервисной архитектуре также представляет
          собой вызов. Данные часто распределены между различными сервисами, что
          требует разработки стратегий для управления согласованностью данных,
          транзакциями и целостностью данных. Взаимодействие микросервисов через
          сеть может привести к увеличению задержек и необходимости управления
          сетевой безопасностью, балансировкой нагрузки и отказоустойчивостью.
        </p>
        <p>
          Обеспечение безопасности в микросервисной архитектуре требует
          дополнительных мер, таких как аутентификация и авторизация на уровне
          сервисов, шифрование данных в транзите и на хранении, а также
          управление секретами. Тестирование микросервисов сложнее, чем
          монолитных приложений, так как необходимо тестировать как отдельные
          сервисы, так и их взаимодействие друг с другом. Это требует
          использования различных подходов, таких как контрактное тестирование и
          интеграционное тестирование.
        </p>
      </div>
      <div id="actual">
        <h3>Актуальной поставленной задачи</h3>
        <p>
          Обычно системы управления образовательным процессом позволяет упросить
          выполнения сложных процессов таких как: управление данными субъектов
          образовательной деятельности, управления контентом и его анализ,
          проектирования индивидуальной образовательной траектории, планирования
          образовательного процесса, реализация образовательного процесса и его
          контроль.
        </p>
        <p>
          Система такой сложности, реализованная не на микросервисной
          архитектуре, сталкивается с рядом значительных проблем, которые могут
          существенно влиять на её эффективность и гибкость. Одной из основных
          проблем является монолитность системы, которая затрудняет её
          масштабирование и модернизацию. В монолитной архитектуре все
          компоненты системы тесно связаны между собой, что делает сложным
          внесение изменений или добавление новых функций без риска нарушения
          работы всей системы. Это приводит к тому, что любые обновления требуют
          значительных усилий и времени, а также тщательного тестирования, чтобы
          избежать сбоев.
        </p>
        <p>
          Кроме того, отсутствие микросервисной архитектуры ограничивает
          возможность независимого развития и развертывания отдельных
          компонентов системы. В микросервисной архитектуре каждый сервис может
          быть разработан, протестирован и развернут независимо от других, что
          позволяет быстрее реагировать на изменения и потребности
          пользователей. В монолитной системе любое изменение требует
          координации между различными командами разработчиков, что замедляет
          процесс и увеличивает вероятность ошибок.
        </p>
        <p>
          Ещё одной проблемой является сложность масштабирования системы. В
          микросервисной архитектуре можно масштабировать только те компоненты,
          которые действительно нуждаются в дополнительных ресурсах, тогда как в
          монолитной системе приходится масштабировать всю систему целиком. Это
          приводит к неэффективному использованию ресурсов и увеличению затрат
          на инфраструктуру. Кроме того, микросервисы позволяют использовать
          различные технологии и языки программирования для разных компонентов,
          что даёт возможность выбирать оптимальные инструменты для решения
          конкретных задач. В монолитной системе все компоненты должны быть
          написаны на одном языке и использовать одну технологическую платформу,
          что ограничивает гибкость и возможности оптимизации.
        </p>
        <p>
          Таким образом, если при проектировании системы управления
          образовательным процессом использовать принципы микросервисной
          архитектуры, то дальнейшее ее развитие и поддержка будет происходить
          быстрее и проще.
        </p>
      </div>
      <div id="recommendations">
        <h3>
          Правила и рекомендации, способствующие правильному построению
          микросервисной архитектуры
        </h3>
        <p>
          При построении микросервисной архитектуры важно знать и применять
          несколько правил, которые позволят в процессе конструирования не
          лишиться преимуществ, получаемых от микросервисов [1].
          <ul>
            <li>
              Разделение контекстов по конкретным бизнес-задачам: каждый
              микросервис должен отвечать за отдельную бизнес-функцию, что
              помогает минимизировать взаимозависимости и облегчает управление
              сервисами, обеспечивая их автономность и независимость. Это
              означает, что каждый сервис должен иметь свои собственные данные и
              не зависеть от других сервисов для выполнения своих задач.
            </li>
            <li>
              Взаимодействие сервисов происходит по заданным интерфейсам: это
              позволяет легко заменять или обновлять сервисы без нарушения
              работы всей системы.
            </li>
            <li>
              Децентрализованное управление данными: каждый микросервис должен
              управлять своими собственными данными, что помогает избежать узких
              мест и улучшает масштабируемость системы.
            </li>
            <li>
              Обеспечение безопасности на уровне каждого микросервиса: каждый
              сервис должен отвечать за сохранность своих данных. Это включает в
              себя аутентификацию, авторизацию и шифрование данных.
            </li>
          </ul>
        </p>
        <p>
          Следование этим правилам поможет создать эффективную, масштабируемую и
          устойчивую микросервисную архитектуру, которая будет легко управляться
          и развиваться.
        </p>
      </div>
      <div id="schema">
        <h3>
          Схема и описание микросервисной архитектуры информационной системы
          управления образовательным процессом
        </h3>
        <p>
          Соблюдая вышеуказанные правила, была спроектирована архитектурная
          схема информационной системы управления образовательным процессом.
          Схема показана на рисунке 1.
        </p>
        <figure
          //@ts-ignore
          align="center"
        >
          <img
            src="https://storage.yandexcloud.net/my-notes/architecture.png"
            alt="Описание изображения"
            width="300"
          />
          <figcaption>
            Рисунок 1 – Схема МСА для схема информационной системы управления
            образовательным процессом
          </figcaption>
        </figure>
        <p>
          Концепция микросервисной архитектуры для системы управления обучающим
          процессом в вузе предполагает разделение системы на отдельные
          контексты, каждый из которых отвечает за определенную бизнес-задачу.
        </p>
        <p>
          Система была разделена на следующие контексты, соответствующие
          поставленным бизнес функциональностям:
          <ul>
            <li>
              Maturity assessment: предоставляет функционал для управления
              данными о зрелости субъектов ОД (студенты и преподаватели):
              портфолио, профиль компетенций, паспорт цифровой зрелости, а также
              вуза в целом;
            </li>
            <li>
              Content management: реализует разработанный сервис семантического
              анализа образовательного контента. Предоставляет возможности для
              внесения, real-time мониторинга качества и актуализации
              образовательного контента в структурированном виде;
            </li>
            <li>
              Designing individual educational trajectory: c помощью этого
              сервиса обучающийся при поддержке куратора и с использованием
              предложенных образовательных ресурсов может конструировать свою
              индивидуальную образовательную траекторию;
            </li>
            <li>
              Planning educational process: отвечает за планирование и
              построение учебного графика образовательного процесса в групповом
              и индивидуальном, синхронном и асинхронном, on-line и on-campus, а
              также смешанном формате сообразно потребностям и возможностям
              субъектов ОД и с учетом ИОТ обучающихся;
            </li>
            <li>
              Education content delivery: отвечает за реализацию
              образовательного процесса, в том числе проведение всех видов
              контроля и аттестации (ассесмента), согласно выработанному
              учебному графику.
            </li>
          </ul>
        </p>
        <p>
          Это позволяет каждой команде разработчиков сосредоточиться на своей
          области ответственности. Это повышает эффективность разработки и
          упрощает внедрение новых функций и обновлений. Каждый микросервис
          может быть масштабирован независимо от других, что позволяет
          эффективно распределять ресурсы и управлять нагрузкой [2].
        </p>
        <p>
          Сервис Auth отвечает за механизмы аутентификации и авторизации. Сервис
          Users хранит и управляет пользовательскими данными.
        </p>
      </div>
      <div id="safety">
        <h3>Безопасность, аутентификация и авторизация</h3>
        <p>
          В рассматриваемой системе ключевыми компонентами отвечающими за
          аутентификацию и авторизацию сервисы Auth и Users, которые отделены от
          остальных микросервисов. Такое разбиение позволяет достичь высокой
          гибкости и масштабируемости системы, а также улучшить управляемость и
          безопасность.
        </p>
        <p>
          Сервис Auth является единой точкой авторизации для всех клиентских
          запросов. Он отвечает за проверку подлинности пользователей, например,
          с помощью выдачи токенов доступа (JWT), которые затем используются для
          аутентификации и авторизации запросов к другим микросервисам.
          Отделение Auth от остальных сервисов позволяет централизовать
          управление безопасностью и упростить обновление механизмов
          аутентификации и авторизации, такие как Keyclock. Это также снижает
          нагрузку на другие микросервисы, освобождая их от необходимости
          самостоятельно обрабатывать аутентификацию.
        </p>
        <p>
          Сервис Users отвечает за управление пользователями, их регистрацией,
          обновлением данных и удалением. Отделение Users от других
          микросервисов позволяет централизовать управление данными
          пользователей и обеспечить их целостность и безопасность. Это также
          упрощает интеграцию с внешними системами и сервисами, такими как LDAP
          или Active Directory, для синхронизации данных пользователей.
        </p>
      </div>
      <div id="services">
        <h3>Взаимодействие сервисов друг с другом</h3>
        <p>
          В данной системе микросервисы будут взаимодействовать друг с другом с
          помощью REST API. REST API является простым и широко распространенным
          способом обмена данными между сервисами. Он обеспечивает гибкость и
          совместимость, а также легко интегрируется с различными клиентами и
          системами [3].
        </p>
        <p>
          Конечно же, этот способ общения сервисов имеет свои недостатки, такие
          как необходимость обработки большого количества сетевых запросов и
          возможные задержки при передаче данных, повышение связанности
          сервисов, что приводит к сбоям при выполнении задачи, если REST запрос
          к другому сервису завершается с ошибкой.
        </p>
        <p>
          Тем не менее, если система реализуется маленькой командой или на
          разработка выделен небольшой промежуток времени, то REST API является
          наиболее приемлемым вариантом, так как он проще в реализации и
          поддержке по сравнению с другими способами взаимодействия, такими как
          gRPC или асинхронные очереди сообщений.
        </p>
        <p>
          Стоит упомянуть, что, когда система будет готова – сможет выполнять
          поставленные задачи, можно будет частично или в некоторых частях
          системы изменить способ взаимодействия сервисов для повышения
          производительности и устойчивости.
        </p>
      </div>
      <div id="opportunities">
        <h3>Возможности для улучшения системы</h3>
        <p>
          Конечно же, данная представленная система со временем может быть
          улучшена, добавив современные технологии и подходы для ее улучшения.
        </p>
        <p>
          Использование сервисной сетки, такой как Istio, может значительно
          улучшить управление сетевыми взаимодействиями между микросервисами.
          Istio предоставляет функции для автоматического балансирования
          нагрузки, управления трафиком, мониторинга, трассировки и обеспечения
          безопасности. Это позволяет централизованно управлять политиками
          безопасности и контролировать сетевые взаимодействия, что упрощает
          поддержку и масштабирование системы [4].
        </p>
        <p>
          Внедрение асинхронного обмена сообщениями с помощью таких систем, как
          Apache Kafka или RabbitMQ, позволяет микросервисам взаимодействовать
          друг с другом без необходимости синхронного ожидания ответов. Это
          улучшает производительность и отказоустойчивость системы, так как
          микросервисы могут продолжать работу, даже если один из них временно
          недоступен. Асинхронный обмен сообщениями также упрощает обработку
          больших объемов данных и событий [1].
        </p>
        <p>
          Внедрение систем мониторинга и логирования, таких как Prometheus и
          Grafana, позволяет отслеживать состояние и производительность
          микросервисов в реальном времени. Это помогает быстро выявлять и
          устранять проблемы, а также оптимизировать работу системы.
          Использование ELK Stack (Elasticsearch, Logstash, Kibana) для
          централизованного сбора, анализа и визуализации логов упрощает отладку
          и анализ проблем, а также позволяет отслеживать безопасность и
          соответствие требованиям.
        </p>
        <p>
          Внедрение систем управления секретами, таких как HashiCorp Vault или
          AWS Secrets Manager, для безопасного хранения и управления
          конфиденциальной информацией, такой как ключи и пароли, также повышает
          безопасность системы.
        </p>
        <p>
          Внедрение этих технологий и подходов может значительно улучшить
          систему управления обучающим процессом в вузе, повысив её
          производительность, безопасность, масштабируемость и управляемость.
          Однако, для одного разработчика это может быть слишком сложной задачей
          из-за необходимости настройки и поддержки множества компонентов и
          инструментов. Поэтому, несмотря на возможные улучшения, целесообразно
          придерживаться более простой архитектуры с использованием REST API и
          централизованного управления аутентификацией и авторизацией, что
          позволит упростить разработку и поддержку системы.
        </p>
        <p>
          Перед использованием этих или других технологий при планировании и
          реализации системы, важно определить наличие достаточного количества
          ресурсов для их внедрения, сравнить получаемую пользу и
          увеличивающуюся сложность конечного продукта.
        </p>
      </div>
      <div id="end">
        <h3>Заключение</h3>
        <p>
          Предложенная микросервисная архитектура для системы управления
          обучающим процессом в вузе обеспечивает высокую гибкость,
          масштабируемость и управляемость. Отделение сервисов Auth и Users от
          остальных микросервисов позволяет централизовать управление
          безопасностью и данными пользователей, что повышает надежность и
          безопасность системы.
        </p>
        <p>
          Использование REST API для взаимодействия между микросервисами
          является оптимальным выбором для старта проекта или его реализации в
          маленькой команде, так как он обеспечивает простоту реализации и
          поддержки. Несмотря на возможные улучшения, такие как внедрение
          сервисной сетки или асинхронного обмена сообщениями, от их
          использования целесообразно отказаться из-за их сложности и
          необходимости значительных усилий для настройки и поддержки.
        </p>
      </div>
      <div>
        <h3 id="links">СПИСОК ИСПОЛЬЗУЕМЫХ ИСТОЧНИКОВ</h3>
        <p>
          <ol>
            <li>
              Ньюмен С., Создание микросервисов,. 2-е изд. СПб.: Питер, 2023. —
              624 с;
            </li>
            <li>
              Иванов, Л. А. Использование микросервисной архитектуры при
              реализации информационной системы для оптимизации работы патрулей
              / Л. А. Иванов // Современные технологии в науке и образовании -
              СТНО-2021 : Сборник трудов IV Международного научно-технического
              форума: в 10 т., Рязань, 03–05 марта 2021 года. Том 4. – Рязань:
              Рязанский государственный радиотехнический университет имени
              В.Ф.Уткина, 2021. – С. 45-48. – EDN YRKLJR.;
            </li>
            <li>
              3. Осипов, Д. Б. Проектирование программного обеспечения с помощью
              микросервисной архитектуры / Д. Б. Осипов // Вестник науки и
              образования. – 2018. – Т. 2, № 5(41). – С. 41-46. – EDN XNMTFJ;
            </li>
            <li>
              Гольчевский, Ю. В. Актуальность использования микросервисов при
              разработке информационных систем / Ю. В. Гольчевский, А. В.
              Ермоленко // Вестник Сыктывкарского университета. Серия 1:
              Математика. Механика. Информатика. – 2020. – № 2(35). – С. 25-36.
              – EDN MYITJK.;
            </li>
          </ol>
        </p>
      </div>`,
      },
    },
  },
  lng: 'ru', // язык по умолчанию
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
