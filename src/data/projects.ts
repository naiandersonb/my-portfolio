import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Transfer: Viagens & Turismo',
    demo: 'https://www.transfervt.com.br/',
    repo: '',
    img: '/images/transfer.png',
    about: [
      'A Transfer: Viagens & Turismo é a primeira empresa legalizada do Sul do Brasil a trabalhar com transporte particular em veículos de até oito pessoas.',
      'O principal objetivo é eliminar a espera desnecessária por um veículo. Na na Transfer: V&T, não é você que espera por um veículo, é o veículo que espera por você. ',
    ],
    level: 'intermediary',
  },

  {
    id: '2',
    name: 'Unifeed Blog',
    demo: 'https://unifeedblog.netlify.app/',
    repo: 'https://github.com/naiandersonb/Unifeed',
    img: '/images/unifeed.png',
    about: [
      'Este projto foi proposto pelo site Codewell.com(link no final da página). O projeto consistiu no desenvolvimento de uma página inicial de blog responsiva. Sendo um desafio perfeito para praticar Flex Box e Grid.',
    ],
    level: 'beginner',
    links: [
      {
        name: 'Desafio Unifed - Codewell',
        link: 'https://www.codewell.cc/challenges/unifeed-blog-page--608d9d5c747bad001532bd7c',
      },
    ],
  },

  {
    id: '3',
    name: 'Devfinder',
    demo: 'https://naiandersonb.github.io/devfinder/',
    repo: 'https://github.com/naiandersonb/devfinder',
    img: '/images/dev-finder.png',
    about: [
      'DevFinder é um projeto baseado no desafio proposto no site Frontend Mentor.',
      'O desafio consiste em construir um aplicativo de pesquisa de usuário do GitHub usando a API de usuários da própria plataforma. O aplicativo deve ser responsivo e se adaptar a qualquer tipo de tela.'
    ],
    links: [
      {
        name: 'Devfinder - Frontend mentor',
        link: 'https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6'
      }
    ]
  },
];
