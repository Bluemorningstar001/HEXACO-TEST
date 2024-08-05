document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('hexacoResults')) || {
        "정직-겸손": 0,
        "감정성": 0,
        "외향성": 0,
        "우호성": 0,
        "성실성": 0,
        "경험에 대한 개방성": 0
    };

    // 성격 유형 및 설명 데이터
    const personalityTypes = [

        {
            famousPeople: ["마하트마 간디", "프란치스코 교황", "알버트 슈바이처"],
            images: ["gandhi.jpg", "pope_francis.jpg", "albert_schweitzer.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙이죠. 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 큰 장점입니다. 자신을 내세우기보다는 다른 사람들을 높여주는 모습이 참 아름답죠. 주위 사람들은 여러분의 진실성과 겸손함에 큰 신뢰를 보냅니다.<br>감정적으로도 매우 풍부한 여러분, '타이타닉'을 볼 때 눈물을 흘리는 것은 기본, 친구가 슬퍼하면 같이 울어주는 따뜻한 마음을 가졌습니다. 여러분은 타인의 감정에 깊이 공감하고, 진심으로 도와주려는 성향이 강합니다. 덕분에 주변 사람들은 여러분을 매우 신뢰하고 좋아합니다. 이런 따뜻한 성품 덕분에 많은 사람들이 여러분을 믿고 따릅니다.<br>여러분의 이런 성격은 사회적 변화에도 큰 영향을 미칠 수 있습니다. 마하트마 간디나 프란치스코 교황, 알버트 슈바이처 같은 인물들은 모두 정직하고 겸손하며, 감정적으로 민감한 성격을 가지고 있어 많은 사람들에게 영감을 주었습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 정직함과 감정적 민감성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br><br>결론적으로, 여러분의 성격은 '진실된 따뜻함의 상징'이라고 할 수 있습니다. 정직하고 겸손하며 감정적으로 민감한 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 따뜻한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["정직-겸손", "감정성"]
        },
        {
            famousPeople: ["엘레노어 루즈벨트", "제인 구달"],
            images: ["roosevelt.jpg", "goodall.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 큰 장점입니다. 자신을 내세우기보다는 다른 사람들의 의견을 존중하고, 그들의 공로를 인정하는 모습이 참 아름답죠.<br>외향적인 성격 덕분에 여러분은 파티의 중심! 어디를 가든 쉽게 친구를 사귀고, 모임에서는 웃음소리가 끊이지 않죠. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>여러분의 정직함과 외향성 덕분에 주변 사람들은 여러분을 신뢰하고 좋아합니다. 회사나 학교에서도 리더십을 발휘하며, 다양한 사람들과의 소통을 통해 협력을 이끌어냅니다. 여러분이 있는 곳에서는 항상 긍정적인 에너지가 넘칩니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 엘레노어 루즈벨트와 제인 구달 같은 인물들은 모두 정직하고 겸손하며, 외향적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>결론적으로, 여러분의 성격은 '정직한 사교의 달인'이라고 할 수 있습니다. 정직하고 겸손하며, 외향적인 여러분은 주변 사람들에게 큰 기쁨과 영감을 주는 존재입니다. 오늘도 여러분의 진실된 마음과 활발한 성격이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["정직-겸손", "외향성"]
        },
        {
            famousPeople: ["마더 테레사", "데즈먼드 투투", "클라라 바튼"],
            images: ["mother_teresa.jpg", "desmond_tutu.jpg", "clara_barton.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 큰 장점입니다. 자신의 업적을 자랑하기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하하는 모습이 참 아름답죠.<br>여러분은 항상 따뜻하고 친절한 태도로 사람들을 대합니다. 타인과의 갈등을 피하고, 협력을 중요시합니다. 친구나 동료들이 어려움을 겪을 때, 먼저 다가가 도와주는 모습은 마치 천사 같아요. 주위 사람들은 여러분의 진실성과 따뜻함에 큰 신뢰를 보냅니다.<br>사회적으로도 여러분은 큰 역할을 할 수 있는 잠재력을 가지고 있습니다. 마더 테레사, 데즈먼드 투투, 클라라 바튼 같은 인물들은 모두 정직하고 겸손하며, 우호적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 가족, 친구, 동료들에게 항상 도움의 손길을 내밀며, 그들의 어려움을 함께 해결하려고 노력합니다. 여러분의 정직함과 우호성 덕분에 많은 사람들은 여러분을 믿고 따릅니다.<br><br>결론적으로, 여러분의 성격은 '따뜻한 진실의 협력자'라고 할 수 있습니다. 정직하고 겸손하며, 우호적인 여러분은 주변 사람들에게 큰 위안과 영감을 주는 존재입니다. 오늘도 여러분의 진실된 마음과 따뜻한 성격이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["정직-겸손", "우호성"]
        },
        {
            famousPeople: ["아브라함 링컨", "앤드류 카네기"],
            images: ["lincoln.jpg", "carnegie.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙입니다. 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 큰 장점입니다. 자신을 내세우기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하하는 모습이 참 아름답죠.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 아브라함 링컨과 앤드류 카네기 같은 인물들은 모두 정직하고 겸손하며, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 정직함과 성실함은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 체계적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br><br>결론적으로, 여러분의 성격은 '진실된 책임의 대명사'라고 할 수 있습니다. 정직하고 겸손하며, 성실한 여러분은 주변 사람들에게 큰 신뢰와 존경을 받는 존재입니다. 오늘도 여러분의 진실된 마음과 성실한 태도가 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["정직-겸손", "성실성"]
        },
        {
            famousPeople: ["레오나르도 다 빈치", "마리 퀴리", "니콜라 테슬라"],
            images: ["da_vinci.jpg", "curie.jpg", "tesla.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙이죠. 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 중요한 특성 중 하나입니다. 자신의 업적을 자랑하기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하합니다.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다. 레오나르도 다 빈치나 니콜라 테슬라 같은 천재들이 여러분의 성격 유형에 속하는 이유도 바로 여기에 있습니다.<br>일상에서 여러분은 끊임없이 새로운 것을 배우고 경험하려고 합니다. 새로운 취미를 시작하거나, 여행을 떠나거나, 다양한 분야의 책을 읽는 등 끊임없이 지식을 쌓고 새로운 것을 시도합니다. 여러분의 정직함과 겸손함 덕분에 주변 사람들은 여러분을 신뢰하고, 여러분의 의견을 존중합니다.<br>학교나 직장에서 여러분은 창의적인 아이디어를 제시하며, 새로운 프로젝트에 적극적으로 참여합니다. 여러분의 경험에 대한 개방성 덕분에 항상 새로운 접근 방법을 시도하며, 혁신적인 결과를 도출합니다. 동료들은 여러분의 창의적인 생각에 감탄하고, 여러분과 함께 일하는 것을 즐깁니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 레오나르도 다 빈치와 마리 퀴리, 니콜라 테슬라 같은 인물들은 모두 정직하고 겸손하며, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br><br>결론적으로, 여러분의 성격은 '진실된 혁신의 탐험가'라고 할 수 있습니다. 정직하고 겸손하며, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 동기를 주는 존재입니다. 오늘도 여러분의 진실된 마음과 혁신적인 생각이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["정직-겸손", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["로빈 윌리엄스", "찰리 채플린" ],
            images: ["williams.jpg", "chaplin.jpg"],
            description: "여러분은 감정적으로 깊이 있는 동시에 사람들과의 상호작용을 즐기는 사교적인 인물입니다. 유머와 따뜻함으로 많은 사람들을 즐겁게 하며, 감정적인 연기로 많은 이들에게 감동을 줍니다. 감정적으로 풍부한 여러분은 친구가 슬퍼할 때 함께 눈물을 흘려주고, 기쁠 때는 누구보다도 크게 웃어주는 사람입니다.<br>외향적인 성격 덕분에 여러분은 파티의 중심! 어디를 가든 쉽게 친구를 사귀고, 모임에서는 웃음소리가 끊이지 않죠. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>여러분의 감정성과 외향성 덕분에 주변 사람들은 여러분을 신뢰하고 좋아합니다. 회사나 학교에서도 리더십을 발휘하며, 다양한 사람들과의 소통을 통해 협력을 이끌어냅니다. 여러분이 있는 곳에서는 항상 긍정적인 에너지가 넘칩니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 로빈 윌리엄스와 찰리 채플린 같은 인물들은 모두 감정적으로 깊이 있으며, 외향적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>결론적으로, 여러분의 성격은 '감정적 사교의 달인'이라고 할 수 있습니다. 감정적으로 깊이 있고, 외향적인 여러분은 주변 사람들에게 큰 기쁨과 영감을 주는 존재입니다. 오늘도 여러분의 진실된 마음과 활발한 성격이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["감정성", "외향성"]
        },
        {
            famousPeople: ["엘리자베스 1세", "조지 워싱턴"],
            images: ["elizabeth.jpg", "washington.jpg"],
            description: "여러분은 감정적으로 민감하며 타인을 잘 이해하고 돕는 성격을 지닌 인물입니다. 자선 활동을 통해 많은 사람들에게 도움을 주며, 따뜻한 마음과 공감 능력으로 많은 이들에게 희망을 줍니다. 감정적으로 풍부한 여러분은 친구가 슬퍼할 때 함께 눈물을 흘려주고, 기쁠 때는 누구보다도 크게 웃어주는 사람입니다.<br>우호적인 성격 덕분에 여러분은 항상 따뜻하고 친절한 태도로 사람들을 대합니다. 타인과의 갈등을 피하고, 협력을 중요시합니다. 친구나 동료들이 어려움을 겪을 때, 먼저 다가가 도와주는 모습은 마치 천사 같아요. 주위 사람들은 여러분의 진실성과 따뜻함에 큰 신뢰를 보냅니다.<br>사회적으로도 여러분은 큰 역할을 할 수 있는 잠재력을 가지고 있습니다. 엘리자베스 1세와 조지 워싱턴 같은 인물들은 모두 감정적으로 민감하며, 우호적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 가족, 친구, 동료들에게 항상 도움의 손길을 내밀며, 그들의 어려움을 함께 해결하려고 노력합니다. 여러분의 감정적 민감성과 우호성 덕분에 많은 사람들은 여러분을 믿고 따릅니다.<br><br>결론적으로, 여러분의 성격은 '따뜻한 감정의 협력자'라고 할 수 있습니다. 감정적으로 민감하며, 우호적인 여러분은 주변 사람들에게 큰 위안과 영감을 주는 존재입니다. 오늘도 여러분의 진실된 마음과 따뜻한 성격이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["감정성", "우호성"]
        },
        {
            famousPeople: ["마크 트웨인", "벤자민 프랭클린"],
            images: ["twain.jpg", "franklin.jpg"],
            description: "여러분은 감정적으로 민감하며 성실하게 자신의 일을 완성합니다. 이들은 자신의 감정을 글이나 행동으로 표현하며, 성실하게 작업에 몰두하여 놀라운 성과를 이루어냅니다. 여러분은 타인의 감정에 깊이 공감하고, 진심으로 도와주려는 성향이 강합니다.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 마크 트웨인과 벤자민 프랭클린 같은 인물들은 모두 감정적으로 깊이 있으며, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 감정적 민감성과 성실함은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 체계적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br><br>결론적으로, 여러분의 성격은 '감정적 책임의 대명사'라고 할 수 있습니다. 감정적으로 민감하며, 성실한 여러분은 주변 사람들에게 큰 신뢰와 존경을 받는 존재입니다. 오늘도 여러분의 진실된 마음과 성실한 태도가 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["감정성", "성실성"]
        },
        {
            famousPeople: ["에드가 앨런 포", "빈센트 반 고흐", "요한 세바스찬 바흐"],
            images: ["poe.jpg", "vangogh.jpg", "bach.jpg"],
            description: "여러분은 감정적으로 깊이 있는 동시에, 창의적으로 표현하는 인물입니다. 예술과 문학에서 뛰어난 성과를 이루며, 감정의 깊이를 창의적으로 전달합니다. 여러분은 타인의 감정에 깊이 공감하고, 진심으로 도와주려는 성향이 강합니다.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 에드가 앨런 포와 빈센트 반 고흐, 요한 세바스찬 바흐 같은 인물들은 모두 감정적으로 깊이 있으며, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 감정적 민감성과 창의적인 생각은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 창의적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br>결론적으로, 여러분의 성격은 '감정적 창의성의 탐험가'라고 할 수 있습니다. 감정적으로 깊이 있으며, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 동기를 주는 존재입니다. 오늘도 여러분의 진실된 마음과 창의적인 생각이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["감정성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["찰스 디킨스", "헨리 포드", "해리엇 터브먼"],
            images: ["dickens.jpg", "ford.jpg", "tubman.jpg"],
            description: "여러분은 사교적이며 다른 사람들과 잘 지내는 성격입니다. 사람들과의 관계를 중요시하며, 타인에게 긍정적인 영향을 미칩니다. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>우호적인 성격 덕분에 여러분은 항상 따뜻하고 친절한 태도로 사람들을 대합니다. 타인과의 갈등을 피하고, 협력을 중요시합니다. 친구나 동료들이 어려움을 겪을 때, 먼저 다가가 도와주는 모습은 마치 천사 같아요. 주위 사람들은 여러분의 진실성과 따뜻함에 큰 신뢰를 보냅니다.<br>사회적으로도 여러분은 큰 역할을 할 수 있는 잠재력을 가지고 있습니다. 찰스 디킨스와 헨리 포드, 해리엇 터브먼 같은 인물들은 모두 외향적이며, 우호적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 가족, 친구, 동료들에게 항상 도움의 손길을 내밀며, 그들의 어려움을 함께 해결하려고 노력합니다. 여러분의 외향성과 우호성 덕분에 많은 사람들은 여러분을 믿고 따릅니다.<br><br>결론적으로, 여러분의 성격은 '사교적 협력의 대명사'라고 할 수 있습니다. 외향적이며, 우호적인 여러분은 주변 사람들에게 큰 위안과 영감을 주는 존재입니다. 오늘도 여러분의 진실된 마음과 활발한 성격이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["외향성", "우호성"]
        },
        {
            famousPeople: ["수잔 B. 앤서니", "루트비히 반 베토벤"],
            images: ["anthony.jpg", "beethoven.jpg"],
            description: "여러분은 사교적이고 성실한 성격을 가지고 있습니다. 사람들과의 상호작용을 즐기며, 책임감 있게 행동합니다. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 수잔 B. 앤서니와 루트비히 반 베토벤 같은 인물들은 모두 외향적이며, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 외향성과 성실함은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 체계적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br><br>결론적으로, 여러분의 성격은 '사교적 책임의 대명사'라고 할 수 있습니다. 외향적이며, 성실한 여러분은 주변 사람들에게 큰 신뢰와 존경을 받는 존재입니다. 오늘도 여러분의 진실된 마음과 성실한 태도가 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["외향성", "성실성"]
        },
        {
            famousPeople: ["토마스 에디슨", "니콜라 테슬라"],
            images: ["edison.jpg", "tesla.jpg"],
            description: "여러분은 사교적이며 창의적인 성격을 가지고 있습니다. 사람들과의 상호작용을 즐기며, 새로운 경험과 아이디어를 받아들입니다. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다. 토마스 에디슨과 니콜라 테슬라 같은 천재들이 여러분의 성격 유형에 속하는 이유도 바로 여기에 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 토마스 에디슨과 니콜라 테슬라 같은 인물들은 모두 외향적이며, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 외향성과 창의적인 생각은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 창의적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br><br>결론적으로, 여러분의 성격은 '사교적 창의성의 탐험가'라고 할 수 있습니다. 외향적이며, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 동기를 주는 존재입니다. 오늘도 여러분의 진실된 마음과 창의적인 생각이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["외향성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["제인 구달", "라이트 형제", "말라라 유사프자이"],
            images: ["goodall.jpg", "wright_brothers.jpg", "malala.jpg"],
            description: "여러분은 타인과 잘 지내며 성실한 성격을 가지고 있습니다. 사람들과의 협력을 중요시하며, 체계적으로 일을 처리합니다. 여러분은 우호적이고 협력적인 성격으로 많은 사람들과 잘 지냅니다.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 제인 구달과 라이트 형제, 말라라 유사프자이 같은 인물들은 모두 우호적이며, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 우호성과 성실함은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 협력적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br>결론적으로, 여러분의 성격은 '협력적 책임의 대명사'라고 할 수 있습니다. 우호적이며, 성실한 여러분은 주변 사람들에게 큰 신뢰와 존경을 받는 존재입니다. 오늘도 여러분의 진실된 마음과 성실한 태도가 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["우호성", "성실성"]
        },
        {
            famousPeople: ["미켈란젤로", "에밀리 디킨슨", "레오나르도 다 빈치"],
            images: ["michelangelo.jpg", "dickinson.jpg", "da_vinci.jpg"],
            description: "여러분은 타인과 잘 지내며 창의적인 성격을 가지고 있습니다. 사람들과의 관계를 중요시하면서도, 새로운 경험과 아이디어를 즐깁니다. 여러분은 우호적이고 협력적인 성격으로 많은 사람들과 잘 지냅니다.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다. 미켈란젤로와 레오나르도 다 빈치 같은 천재들이 여러분의 성격 유형에 속하는 이유도 바로 여기에 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 미켈란젤로와 에밀리 디킨슨, 레오나르도 다 빈치 같은 인물들은 모두 우호적이며, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 우호성과 창의적인 생각은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 창의적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br>결론적으로, 여러분의 성격은 '협력적 창의성의 탐험가'라고 할 수 있습니다. 우호적이며, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 동기를 주는 존재입니다. 오늘도 여러분의 진실된 마음과 창의적인 생각이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["우호성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["루이 파스퇴르", "마리 퀴리", "니콜라 테슬라"],
            images: ["pasteur.jpg", "curie.jpg", "tesla.jpg"],
            description: "여러분은 성실하면서도 창의적인 성격을 가지고 있습니다. 책임감 있게 행동하며, 새로운 아이디어를 받아들입니다. 여러분은 성실하고 체계적인 성격으로 많은 사람들에게 신뢰를 받습니다.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다. 루이 파스퇴르와 마리 퀴리, 니콜라 테슬라 같은 천재들이 여러분의 성격 유형에 속하는 이유도 바로 여기에 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 루이 파스퇴르와 마리 퀴리, 니콜라 테슬라 같은 인물들은 모두 성실하며, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이러한 인물들처럼 큰 변화를 이끌어낼 수 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 회사나 학교에서 여러분의 성실성과 창의적인 생각은 많은 사람들에게 귀감이 됩니다. 여러분의 책임감과 창의적인 접근 방식 덕분에 주변 사람들은 여러분을 믿고 의지합니다.<br><br>결론적으로, 여러분의 성격은 '책임감 있는 창의성의 탐험가'라고 할 수 있습니다. 성실하며, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 동기를 주는 존재입니다. 오늘도 여러분의 진실된 마음과 창의적인 생각이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["성실성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["헨리 데이비드 소로우", "피터 드러커"],
            images: ["thoreau.jpg", "drucker.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙입니다. 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 중요한 특성 중 하나입니다. 자신의 업적을 자랑하기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하합니다.<br>감정적으로도 매우 풍부한 여러분, '타이타닉'을 볼 때 눈물을 흘리는 것은 기본, 친구가 슬퍼하면 같이 울어주는 따뜻한 마음을 가졌습니다. 여러분은 타인의 감정에 깊이 공감하고, 진심으로 도와주려는 성향이 강합니다. 덕분에 주변 사람들은 여러분을 매우 신뢰하고 좋아합니다.<br>외향적인 성격 덕분에 여러분은 파티의 중심! 어디를 가든 쉽게 친구를 사귀고, 모임에서는 웃음소리가 끊이지 않죠. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 헨리 데이비드 소로우와 피터 드러커 같은 인물들은 모두 정직하고 겸손하며, 감정적으로 민감하고, 외향적인 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 정직함과 감정적 민감성, 외향성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br><br>결론적으로, 여러분의 성격은 '진실된 따뜻함의 사교의 달인'이라고 할 수 있습니다. 정직하고 겸손하며, 감정적으로 민감하고, 외향적인 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 따뜻한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["정직-겸손", "감정성", "외향성"]
        },
        {
            famousPeople: ["요요마", "레오나르도 다 빈치", "존 스튜어트 밀"],
            images: ["yo_yo_ma.jpg", "da_vinci.jpg", "mill.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙입니다. 친구들이 ;너는 거짓말하면 얼굴에 다 드러나;라고 할 정도로 정직합니다. 겸손함 또한 여러분의 중요한 특성 중 하나입니다. 자신의 업적을 자랑하기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하합니다.<br>외향적인 성격 덕분에 여러분은 파티의 중심! 어디를 가든 쉽게 친구를 사귀고, 모임에서는 웃음소리가 끊이지 않죠. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 요요마, 레오나르도 다 빈치, 존 스튜어트 밀 같은 인물들은 모두 정직하고 겸손하며, 외향적이고, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 정직함과 외향성, 경험에 대한 개방성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br><br>결론적으로, 여러분의 성격은 '진실된 사교의 탐험가'라고 할 수 있습니다. 정직하고 겸손하며, 외향적이고, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 활발한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["정직-겸손", "외향성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["마더 테레사", "토머스 모어"],
            images: ["mother_teresa.jpg", "more.jpg"],
            description: "여러분은 감정적으로 깊이 있는 동시에 사람들과의 상호작용을 즐기는 사교적인 인물입니다. 유머와 따뜻함으로 많은 사람들을 즐겁게 하며, 감정적인 연기로 많은 이들에게 감동을 줍니다. 감정적으로 풍부한 여러분은 친구가 슬퍼할 때 함께 눈물을 흘려주고, 기쁠 때는 누구보다도 크게 웃어주는 사람입니다.<br>외향적인 성격 덕분에 여러분은 파티의 중심! 어디를 가든 쉽게 친구를 사귀고, 모임에서는 웃음소리가 끊이지 않죠. 여러분은 사교적이고 활발한 성격으로 많은 사람들과 잘 지냅니다. '사교의 달인'이라는 별명이 붙어도 전혀 어색하지 않아요.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 마더 테레사와 토머스 모어 같은 인물들은 모두 감정적으로 깊이 있으며, 외향적이고, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 감정적 민감성, 외향성, 성실성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br><br>결론적으로, 여러분의 성격은 '감정적 사교의 책임감'이라고 할 수 있습니다. 감정적으로 깊이 있으며, 외향적이고, 성실한 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 따뜻한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다. ",
            traits: ["감정성", "외향성", "성실성"]
        },
        {
            famousPeople: ["앤드류 카네기", "제인 구달", "헬렌 켈러"],
            images: ["carnegie.jpg", "goodall.jpg", "keller.jpg"],
            description: "여러분은 타인과 잘 지내며 성실한 성격을 가지고 있습니다. 사람들과의 협력을 중요시하며, 체계적으로 일을 처리합니다. 여러분은 우호적이고 협력적인 성격으로 많은 사람들과 잘 지냅니다.성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>경험에 대한 개방성은 여러분의 또 다른 큰 특징입니다. 여러분은 새로운 것을 탐구하고, 경험하는 것을 두려워하지 않습니다. 항상 새로운 아이디어와 경험을 받아들이며, 창의적이고 혁신적인 생각을 가지고 있습니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 앤드류 카네기, 제인 구달, 헬렌 켈러 같은 인물들은 모두 우호적이며, 성실하고, 경험에 대한 개방성을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 우호성, 성실성, 경험에 대한 개방성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br>결론적으로, 여러분의 성격은 '협력적 책임의 탐험가'라고 할 수 있습니다. 우호적이며, 성실하고, 새로운 경험을 두려워하지 않는 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 활발한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["우호성", "성실성", "경험에 대한 개방성"]
        },
        {
            famousPeople: ["플로렌스 나이팅게일", "마리안 앤더슨", "엘레노어 루즈벨트"],
            images: ["nightingale.jpg", "anderson.jpg", "roosevelt.jpg"],
            description: "여러분은 마치 거짓말이 안 되는 인간 거짓말탐지기! 진실을 말하는 것이 여러분의 기본 원칙입니다. 친구들이 '너는 거짓말하면 얼굴에 다 드러나'라고 할 정도로 정직합니다. 겸손함 또한 여러분의 중요한 특성 중 하나입니다. 자신의 업적을 자랑하기보다는 다른 사람들의 공로를 인정하고, 그들의 성취를 축하합니다.<br>여러분은 항상 따뜻하고 친절한 태도로 사람들을 대합니다. 타인과의 갈등을 피하고, 협력을 중요시합니다. 친구나 동료들이 어려움을 겪을 때, 먼저 다가가 도와주는 모습은 마치 천사 같아요. 주위 사람들은 여러분의 진실성과 따뜻함에 큰 신뢰를 보냅니다.<br>성실성은 여러분의 또 다른 큰 특징입니다. 여러분은 맡은 일을 끝까지 책임지고 완수하는 데 최선을 다합니다. '일을 맡기면 반드시 해낸다'라는 말이 딱 어울리는 사람입니다. 어떤 일이든 체계적으로 계획하고, 꼼꼼하게 진행하는 능력이 탁월합니다.<br>사회적으로도 여러분은 중요한 역할을 할 수 있는 잠재력을 가지고 있습니다. 플로렌스 나이팅게일, 마리안 앤더슨, 엘레노어 루즈벨트 같은 인물들은 모두 정직하고 겸손하며, 우호적이고, 성실한 성격을 바탕으로 많은 사람들에게 긍정적인 영향을 미쳤습니다. 여러분도 이들과 같이 큰 변화를 이끌어낼 수 있는 잠재력을 가지고 있습니다.<br>일상에서도 여러분의 성격은 빛을 발합니다. 친구나 가족들이 어려움을 겪을 때, 여러분은 진심으로 다가가 그들을 돕습니다. 회사나 학교에서도 여러분의 정직함, 우호성, 성실성은 많은 이들에게 귀감이 됩니다. 여러분의 따뜻한 마음과 진실된 태도는 주변 사람들에게 큰 위안과 힘이 됩니다.<br>결론적으로, 여러분의 성격은 '진실된 협력의 책임자'라고 할 수 있습니다. 정직하고 겸손하며, 우호적이고, 성실한 여러분은 주변 사람들에게 큰 영감과 위로를 주는 존재입니다. 오늘도 여러분의 진실되고 따뜻한 마음이 세상을 밝게 비출 것입니다. 잊지 마세요, 여러분의 그 진심이 많은 사람들에게 큰 힘이 됩니다.",
            traits: ["정직-겸손", "우호성", "성실성"]
        }
    ];

    // 가장 높은 2가지 성격 특성을 찾습니다.
    const sortedTraits = Object.keys(results).sort((a, b) => results[b] - results[a]);
    const topTraits = sortedTraits.slice(0, 2);

    let matchedType = personalityTypes.find(type => type.traits.every(trait => topTraits.includes(trait)));
    if (!matchedType) {
        matchedType = personalityTypes[0];
    }

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <h2>${matchedType.famousPeople.join(', ')}</h2>
        <div class="images-container">
            ${matchedType.images.map(image => `<img src="images/${image}" alt="${image.split('.')[0]}">`).join('')}
        </div>
        <p>${matchedType.description}</p>
    `;

    const data = {
        labels: ['정직-겸손', '감정성', '외향성', '우호성', '성실성', '개방성'],
        datasets: [{
            label: 'HEXACO 테스트 결과',
            data: [
                results["정직-겸손"],
                results["감정성"],
                results["외향성"],
                results["우호성"],
                results["성실성"],
                results["경험에 대한 개방성"]
            ],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 7,
                    ticks: {
                        stepSize: 1,
                        backdropColor: 'rgba(0, 0, 0, 0)',
                        color: '#D3D3D3',
                        font: { size: 16 },
                        callback: function(value) { return value.toFixed(1); }
                    },
                    pointLabels: {
                        font: { size: 18 },
                        color: '#000000'
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw.toFixed(2)}`;
                        }
                    }
                },
                datalabels: {
                    color: '#000',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    anchor: 'end',
                    align: 'top',
                    offset: 5,
                    font: { weight: 'bold' },
                    formatter: function(value) {
                        return typeof value === 'number' ? value.toFixed(2) : value;
                    }
                }
            }
        }
    };

    if (typeof Chart !== 'undefined' && typeof ChartDataLabels !== 'undefined') {
        Chart.register(ChartDataLabels);
        const ctx = document.getElementById('hexacoChart');
        if (ctx) {
            new Chart(ctx, config);
        } else {
            console.error('Canvas element "hexacoChart" not found');
        }
    } else {
        console.error('Chart.js or ChartDataLabels plugin not loaded');
    }

    const shareButton = document.getElementById('share-button');
    const copyUrlButton = document.getElementById('copy-url-button');
    const saveImageButton = document.getElementById('save-image-button');
    const closeSharePopupButton = document.getElementById('close-share-popup');
    const backButton = document.getElementById('back-to-index-button');

    // URL 복사 이벤트 리스너 추가 (중복 방지)
    shareButton.addEventListener('click', () => {
        const baseUrl = window.location.origin + window.location.pathname.replace('result.html', 'index.html');
        const shareUrl = `${baseUrl}`;
        const sharePopup = document.getElementById('share-popup');
        sharePopup.style.display = 'block';

        copyUrlButton.onclick = () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('URL이 복사되었습니다.');
            }).catch(err => {
                console.error('URL 복사 실패', err);
            });
        };
    });

    // 이미지 저장 이벤트 리스너 추가 (중복 방지)
    saveImageButton.addEventListener('click', async () => {
        backButton.style.display = 'none';
        shareButton.style.display = 'none';
        const sharePopup = document.getElementById('share-popup');
        sharePopup.style.display = 'none';

        // DOM 업데이트를 위한 지연
        await new Promise(resolve => setTimeout(resolve, 100));

        try {
            const canvas = await html2canvas(document.body, {
                ignoreElements: (element) => {
                    return element.id === 'back-to-index-button' || 
                           element.id === 'share-button' || 
                           element.id === 'share-popup';
                }
            });

            // 이미지 다운로드
            const link = document.createElement('a');
            link.download = 'hexaco_result.png';
            link.href = canvas.toDataURL();
            link.click();
        } catch (error) {
            console.error('이미지 캡처 중 오류 발생:', error);
            alert('이미지 저장 중 오류가 발생했습니다.');
        } finally {
            backButton.style.display = 'block';
            shareButton.style.display = 'block';
        }
    });

    // 공유 팝업 닫기 이벤트 리스너 추가 (중복 방지)
    closeSharePopupButton.addEventListener('click', () => {
        document.getElementById('share-popup').style.display = 'none';
    });

    // 메인 페이지로 돌아가기 버튼 이벤트 리스너 추가 (중복 방지)
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

