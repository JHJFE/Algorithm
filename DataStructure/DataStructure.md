## 들어가기 앞서...
### 알고리즘이란?

IT 분야에서는 " 문제를 해결하기 위한 프로세스 및 로직을 의미 " 한다고 이해했다.
추가적으로 그저 단순히 "해결"이 아닌, "효율성, 정확성"등을 만족하는 최적의 로직을 의미한다고 생각한다.

### 알고리즘의 조건 5가지는?

1. 입력  : 알고리즘은 0 또는 그 이상의 외부에서 제공된 자료가 존재해야한다.
==> 입력이 있어야 한다.

2. 출력  : 알고리즘은 최소 1개 이상의 결과를 가져야한다.
==> 출력이 있어야 한다.

3. 명확성 : 알고리즘은 각 단계는 명확하여 애매함이 없어야 한다.
==> 로직의 프로세스간 구분이 뚜렷해야한다.

4. 유한성 : 알고리즘은 단계들을 유한한 횟수로 거친 후 문제를 해결하고 종료해야 한다. 알고리즘의 한 단계 이후 m의 값은 n 보다 작으면, m != 0 이면 n의 값은 다음 번 단계에서 줄어든다.
==> 끝(종료)이 있어야 한다.

5. 효과성 : 알고리즘은 모든 연산들은 사람이 종이와 연필을 이용하여 유한한 시간 안에 정확하게 수행할 수 있을 정도로 충분히 단순해야 한다.
==> 같은 기능 기준으로 쉽고 간단할수록 이상적이다. 

<p align="right">출처: 나무위키, 2022-12-10, https://namu.wiki/w/알고리즘
                 
                
## 자료구조

### Data Structure
: 데이터(자료)를 효율적으로 사용・관리하기 자료를 구분해 조직화하고 저장・관리(구조)하는 것

### 자료구조와 알고리즘의 관계성
효율적으로 저장・관리한 데이터(자료구조) + 문제해결을 위한 최적의 방법

= 특정작업에서의 처리 과정 및 순서를 기술한 명령어

## 자료구조의 종류
### <span style="color:indianred">[ 선형(Linear) ]</span>  (자료간 선후 관계 1 : 1)

### 스택(Stack)
: LILO(Last In Last Out), 후입선출의 규칙을 따르는 자료형
  
<img src = "https://velog.velcdn.com/images/ghwo9611/post/71d1b186-70a7-42c7-8eca-5681164bd08d/image.png" width ="23%" align = "">

### 큐(Queue)
: FIFO(First In First Out), 선입선출의 규칙을 따르는 자료형
- enQueue() : 데이터 입력
- deQeueu() : 데이터 출력
  <img src = "https://velog.velcdn.com/images/ghwo9611/post/8c2b49c9-f952-485a-a1d4-9f7f6d360f52/image.png" width ="40%" align="">
### 데큐(Double Ended Queue)
: 양쪽에서 입출이 가능한 큐 형식의 자료형
- <span style = 'background-color : #fedbdf'>pushFront()</span> : 앞쪽 데이터 입력
- <span style = 'background-color : #fedbdf'>popFront()</span>  : 앞쪽 데이터 출력
- <span style = 'background-color : #eef6fd'>pushBack()</span>  : 뒤쪽 데이터 입력
- <span style = 'background-color : #eef6fd'>popBack()</span>   : 뒤쪽 데이터 출력
<img src = "https://velog.velcdn.com/images/ghwo9611/post/59ec681b-bd3c-4a3f-8fcc-511bee0231f5/image.png" width = "43%">
### 연결 리스트(Linked Lists)
: 각각의 노드에 HEAD와 TAIL이 있으며 HEAD에는 데이터가 TAIL에는 다음 데이터를 가르치는 포인터가 담겨 있으며 이러한 노드들이 이어 연결되어 있는 자료구조
  
장점
 - 데이터의 길이에 따라 동적으로 할당해 메모리 효율 증가
 - 포인터를 활용해 중간 지점의 데이터의 삭제 및 추가 용이

단점
 - 데이터 이외의 포인터 주소값 또한 필요하여 추가적인 메모리 사용
 - 처음부터 끝까지 순차적으로 탐색을 진행햐 하기 때문에 탐색에 불리


### <span style="color:indianred">[ 비선형 NonLinear ]</span> : 자료간의 관계 N : M
### 해시(Hash) 
: 임의의 길이의 데이터(key)를 해시함수를 통해 고정된 길이의 데이터로 변환하여 해시값(주소,인덱스)을 생성하고 그 위치에 key-value의 형태로 해쉬 테이블을 생성하는 자료구조
  
장점
  - key-value의 1 대 1 Mapping 구조이기 때문에 쉽게 탐색이 가능하다
단점
  - 충돌의 가능성이 있다
  - 저장할 공간을 미리 생성하고 채우는 방식으로 공간을 활용하지 않을 경우 메모리 낭비

### 힙(Heap)
: 최대값 혹은 최소값을 빠르게 찾아낼 수 있는 완전트리주로의 자료형으로 중복값을 허용한 상태로 구현
  
  - 최대값 힙
  : 부모 노드 값 ≥ 자식 노드 값 규칙을 따르는 완전 이진트리
  - 최소값 힙
  : 부모 노드 값 ≤ 자식 노드 값 규칙을 따르는 완전 이진트리
  <br/><br/>
  
  
  
 < 해당 자료구조의 내용은 코드로 구현해보며 내용을 수정 및 보완할 예정이다>

