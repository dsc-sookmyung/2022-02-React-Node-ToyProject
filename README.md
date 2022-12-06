# 2022-02-React-Node-ToyProject

[22-23 GDSC Sookmyung 3기] 1분기 React-Node 토이프로젝트를 위한 저장소

## 서버 협업 규칙

### 🧳 Branch

🌱 git branch 전략

`main branch` : 주요 개발 branch, main merge 전 거치는 branch

`feature branch`: 각자 개발 branch

- 할 일 issue 등록 후 issue 번호로 branch 생성 후 작업
  - ex) 본인이름/feature/#`issue num`
- 해당 branch 작업 완료 후 PR 보내기
  - 항상 local에서 충돌 해결 후 → remote에 올리기
  - 본인이 충돌 해결후 main에 merge!

#### branch 구조

```
- main
- feature
   ├── #1
   └── #2
```

### 🧳 Commit Convention

👻 git commit message convention

`ex) Feat/#`issue num `User API 파일 추가`

- `Chore : 코드 수정, 내부 파일 수정
- Feat : 새로운 기능 구현
- Add : Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시
- Fix : 버그, 오류 해결
- Del : 쓸모없는 코드 삭제
- Docs : README나 WIKI 등의 문서 개정
- Move : 프로젝트 내 파일이나 코드의 이동
- Rename : 파일 이름의 변경
- Merge: 다른브렌치를 merge하는 경우
- Style : 코드가 아닌 스타일 변경을 하는 경우
- Init : Initial commit을 하는 경우`
