# 🍃모아봐요 동물의숲
<img src="https://raw.githubusercontent.com/seo1a/animal-crossing/refs/heads/main/src/assets/animal-crossing-home.png" alt="movie-project-home" width="600"/>
<br><br>

<details>
  <summary>📱모바일 UI 확인하기</summary> 
  
  <img src="https://raw.githubusercontent.com/seo1a/animal-crossing/refs/heads/main/src/assets/animal-crossing-mobile.png" alt="movie-project-mobile" width="300"/>
  
</details>
<br>

## 🦝 프로젝트 소개
모아봐요 동물의숲은 nookipedia(https://api.nookipedia.com/) API로부터 각종 동물의숲 게임 데이터를 받아와 이웃의 정보를 확인하고 검색 및 기준에 따른 모아보기를 할 수 있는 반응형 웹 애플리케이션입니다.
이웃 정보 상세 보기, 자동완성 검색어 드롭다운, 카드 Flip 애니메이션, 다양한 모아보기 기준(종/성격/성별)을 통해 사용자 경험을 강화했습니다.<br><br><br>

## 🌐배포
[🔗 https://animal-crossing-henna.vercel.app/](https://animal-crossing-henna.vercel.app/)
<br>
<br>
<br>
<br>


## 🧩기술 스택 <br>

React + TypeScript 기반으로 Animal Crossing 캐릭터 정보를 시각적으로 탐색할 수 있는 웹 애플리케이션입니다.
<br>

### 1. 프론트엔드 <br>
- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/> UI 구성 및 컴포넌트 기반 개발
- <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> 빠른 개발 환경 및 번들링
- <img src="https://img.shields.io/badge/TypeScript-ES6+-F7DF1E?style=for-the-badge&logo=typescript&logoColor=blue"/> 주요 로직 구현
- <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white"/> 서버 상태 관리 및 데이터 캐싱
- <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/> API 통신 처리
- <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"/> : 유틸리티 기반 스타일링을 통한 반응형 UI 구현
<br>

### 2. 애니메이션 & UI <br>
- <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=000"/> 카드 Flip 애니메이션 구현
<br>

### 3. 배포 <br>
- <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/> : 프론트엔드 애플리케이션 배포 및 환경 변수 관리
<br>

### 4. 개발 환경 <br>
- <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/> : 버전 관리
- <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/> : 소스 코드 관리 및 프로젝트 문서화
<br>
<br>
<br>
<br>

## 📁프로젝트 구조 <br>


```
animal-crossing
├── node_modules
├── public
├── src
│   ├── assets              
│   ├── components          
│   │   ├── Card.tsx        
│   │   ├── Header.tsx        
│   │   └── SearchBar.tsx     
│   ├── hooks
│   │   └── getVillagers.ts    
│   ├── pages
│   │   └── Home.tsx           
│   ├── types
│   │   └── villager.ts        
│   ├── utils
│   │   └── villagerMappings.ts             
│   ├── App.css
│   ├── App.tsx             
│   ├── index.css             
│   └── main.tsx             
├── .env                     
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```
<br>
<br>
<br>
<br>

## 📚주요 기능

- **주민 정보 확인**: 홈 화면의 주민 카드를 통해 이미지와 이름을 확인할 수 있습니다. 카드를 클릭하면 주민의 상세정보 (종, 성격, 성별, 생일, 대사) 를 확인할 수 있습니다.

- **주민 검색**: 검색창에 주민 이름을 입력하면 자동완성 검색어가 드롭다운으로 표시됩니다. 자동완성 선택/엔터로 검색이 실행됩니다.

- **복합 필터링**: 검색어와 필터(종/성격/성별)를 동시에 적용하여 원하는 조건의 주민을 정확하게 찾을 수 있습니다.

- **기준에 따른 주민 모아보기**: 홈 화면에서 종, 성격, 성별의 세 가지 기준을 사용해 주민들을 그룹화하여 탐색할 수 있습니다.

- **이중 캐싱 시스템**: localStorage를 이용한 캐싱과 React Query의 메모리 캐싱을 함께 적용했습니다. localStorage에 캐시된 데이터가 존재할 경우 API 호출 없이 즉시 데이터를 반환하여 불필요한 네트워크 요청과 비용을 줄이고, 초기 렌더링 속도를 최적화했습니다.

- **동적 카드 색상**: 각 주민의 고유 색상(title_color, text_color)이 카드 배경 및 텍스트 색상에 반영되어 주민의 특징을 표현합니다.

- **카드 호버 애니메이션**: 카드에 마우스를 올리면 확대 및 그림자 효과가 적용되어 시각적 피드백을 제공합니다.

- **카드 플립 애니메이션**: GSAP을 사용해 카드 클릭 시 Y축 회전(Flip) 애니메이션을 적용하여 카드 앞면에서 뒷면으로 자연스럽게 전환되는 인터랙션을 구현했습니다.

- **반응형 UI**: 모바일, 데스크탑에 최적화 된 사용자 경험을 제공합니다.
<br>
<br>
<br>
<br>

## 🛠설치 및 실행 방법 <br>
```bash
# 리포지터리 복제
git clone https://github.com/seo1a/animal-crossing.git
cd animal-crossing

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
<br>
<br>
<br>

## ✏환경 변수 설정 (.env) <br>

다음과 같이 `.env` 파일을 루트 디렉토리에 생성하고 API 키를 입력해주세요: <br>

```
VITE_API_KEY=YOUR_NOOKIPEDIA_API_KEY


`YOUR_NOOKIPEDIA_API_KEY` 부분에 본인의 실제 키를 입력해주세요!
```
<br>
<br>
<br>

## 💡한계 및 향후 개선 방향 <br>

### 1. 무한 스크롤 기능 구현 불가능 <br>
Nookipedia API는 페이지네이션을 지원하지 않아 무한 스크롤 기능을 구현하는 데 제약이 있었습니다. 이에 대한 대안으로, 최초 접속 시 데이터를 한 번만 로딩한 후 캐시를 활용하여 이후 재접속 시 로딩 시간을 최소화함으로써 사용자 경험을 최대한 저해하지 않도록 설계했습니다.<br><br>
### 2. 주민 이름 한글화 미지원 <br>
Nookipedia API는 주민 이름을 영문으로만 제공하고 있으며, 한글 이름을 공식적으로 지원하는 API는 확인할 수 없었습니다. 한글화를 위해 villagerMappings.ts에서 영문 이름과 한글 이름을 직접 매핑하는 방식을 검토했으나, 주민 수가 매우 많아 유지보수 및 확장성 측면에서 현실적인 한계가 있다고 판단하여 적용하지 않았습니다. <br><br>
### 3. 콘텐츠 확장<br> 
현재는 동물의 숲 주민들의 상세 정보를 확인하고, 조건에 따라 목록을 탐색하는 기능에 초점을 맞추고 있습니다. 향후 개선한다면 주민 정보 외에도 게임 내에서 획득 가능한 아이템, 채집 가능한 물고기 및 곤충의 정보 등을 추가하여, 보다 풍부한 콘텐츠를 제공하는 방향으로 확장할 수 있을 것으로 기대합니다.
<br> 
<br> 
<br> 

## 📌참고 <br>

Nookipedia API 문서: https://api.nookipedia.com
 
