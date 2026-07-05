# 💱 SimpleExchange

> 간단한 환율 조회 · React Native 기반 모바일 앱

실시간 기준 환율을 한눈에 확인할 수 있는 심플한 환율 계산 앱입니다.

---

## 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| Framework | React Native | 0.86.0 |
| Platform | Expo | ~57.0.1 |
| Language | TypeScript | ~6.0.3 |
| UI Library | React | 19.2.3 |
| Status Bar | expo-status-bar | ~57.0.0 |

---

## 주요 기능

- **금액 직접 입력** — 보내는 금액 / 받는 금액을 사용자가 직접 입력 (TextInput + 숫자 키보드)
- **통화 스왑** — 보내는/받는 통화를 원형 버튼으로 즉시 교환
- **통화 선택 영역** — 각 입력 필드에 통화 종류를 선택할 수 있는 셀렉터 배치
- **카드형 레이아웃** — 라운드 카드 디자인으로 깔끔한 UI 구성
- **헤더 카드** — 아이콘과 함께 앱 타이틀 및 설명을 표시하는 블루 컬러 헤더

---

## 아키텍처

Clean Architecture 기반으로 **Domain / Data / Presentation** 레이어를 분리합니다.

```
App.tsx (View) → mainViewModel (ViewModel/Hook) → MainState (UiState)
                                                  → Currency (Domain Model)
```

- **Domain** — 프레임워크 의존 없는 순수 TypeScript (모델, 유스케이스)
- **Presentation** — React Hook 기반 ViewModel + 상태 관리

---

## 프로젝트 구조

```
SimpleExchange/
├── App.tsx                          # 메인 화면 (View)
├── index.ts                         # 앱 엔트리 포인트
├── domain/
│   └── model/
│       └── Currency.ts              # 통화 도메인 모델 (code, price, rate)
├── presentation/
│   └── hooks/
│       ├── mainState.ts             # MainState 인터페이스 + 초기값
│       └── mainViewModel.ts         # ViewModel Hook (상태 관리 + 이벤트 처리)
├── assets/
│   ├── icon.png                     # 앱 아이콘
│   ├── splash-icon.png              # 스플래시 아이콘
│   ├── favicon.png                  # 웹 파비콘
│   ├── headerIcon.png               # 헤더 카드 아이콘
│   ├── changeIcon.png               # 통화 스왑 버튼 아이콘
│   ├── android-icon-foreground.png
│   ├── android-icon-background.png
│   └── android-icon-monochrome.png
├── app.json                         # Expo 설정
├── package.json                     # 의존성 및 스크립트
├── tsconfig.json                    # TypeScript 설정 (strict 모드)
└── LICENSE                          # MIT License
```

---

## UI 구성

앱은 단일 화면으로 구성되어 있으며, 크게 세 영역으로 나뉩니다:

1. **헤더 카드** (`#155DFC` 블루 배경) — 앱 아이콘 + 타이틀 + 서브타이틀
2. **보내는 금액 영역** — 금액 입력 필드 + 통화 선택 + 스왑 버튼
3. **받는 금액 영역** — 변환된 금액 표시 (파란색 강조) + 통화 선택

---

## 시작하기

### 사전 요구사항

- Node.js
- Expo CLI
- Expo Go 앱 (모바일 테스트 시)

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 플랫폼별 실행
npm run android
npm run ios
npm run web
```

---

## 라이선스

MIT License — 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.
