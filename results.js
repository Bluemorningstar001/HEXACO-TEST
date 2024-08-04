document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('hexacoResults')) || {
        "Honesty-Humility": 0,
        "Emotionality": 0,
        "Extraversion": 0,
        "Agreeableness": 0,
        "Conscientiousness": 0,
        "Openness to Experience": 0
    };

    // 성격 유형 및 설명 데이터
    const personalityTypes = [
        {
            famousPeople: ["마하트마 간디", "프란치스코 교황", "알버트 슈바이처"],
            images: ["gandhi.jpg", "pope_francis.jpg", "albert_schweitzer.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며 감정적으로 민감합니다. 이들은 타인에게 진실하고 자신의 감정을 깊이 느끼며 타인의 감정을 잘 이해합니다. 이들은 원칙을 지키며, 사회적 변화를 이끌고자 헌신합니다. 인내심이 강하고, 자신의 신념을 위해 헌신하는 성격을 지니고 있습니다. 이들의 정직함과 감정적 민감성은 많은 사람들에게 영감을 줍니다.",
            traits: ["Honesty-Humility", "Emotionality"]
        },
        {
            famousPeople: ["넬슨 만델라", "엘레노어 루즈벨트", "말라라 유사프자이"],
            images: ["mandela.jpg", "roosevelt.jpg", "malala.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하면서도 사교적입니다. 이들은 사람들과의 관계를 중요시하며 신뢰를 구축합니다. 이들은 평등과 정의를 위한 노력을 통해 존경받는 인물입니다. 사교성을 통해 다양한 사람들과 소통하고, 협력을 이끌어내며 사회적 변화를 이루어냅니다.",
            traits: ["Honesty-Humility", "Extraversion"]
        },
        {
            famousPeople: ["마더 테레사", "데즈먼드 투투", "안젤리나 졸리"],
            images: ["mother_teresa.jpg", "desmond_tutu.jpg", "angelina_jolie.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며 다른 사람들과 잘 지냅니다. 이들은 타인과의 갈등을 피하고, 협력을 중요시합니다. 빈곤과 질병에 시달리는 사람들을 돕기 위해 헌신하며, 우호적이고 협력적인 성격으로 많은 사람들에게 희망과 위안을 줍니다. 이들의 삶은 사랑과 자비의 본보기가 됩니다.",
            traits: ["Honesty-Humility", "Agreeableness"]
        },
        {
            famousPeople: ["아브라함 링컨", "워렌 버핏", "앤절라 머켈"],
            images: ["lincoln.jpg", "buffett.jpg", "merkel.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며 성실합니다. 이들은 자신의 책임을 다하고, 체계적으로 일을 처리합니다. 이들의 리더십과 성실함은 조직을 위기에서 구해내며, 원칙을 지키고 국민을 위해 헌신적으로 일합니다. 정직함과 성실성은 많은 이들에게 존경을 받습니다.",
            traits: ["Honesty-Humility", "Conscientiousness"]
        },
        {
            famousPeople: ["레오나르도 다 빈치", "마리 퀴리", "스티브 잡스"],
            images: ["da_vinci.jpg", "curie.jpg", "jobs.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하면서도 창의적이고 다양한 경험을 즐깁니다. 예술과 과학, 수학 등 다양한 분야에서 뛰어난 업적을 남기며, 호기심과 창의성으로 많은 사람들에게 영감을 줍니다. 새로운 아이디어를 탐구하고 실험하며, 작품과 발명품은 시대를 초월한 가치를 지닙니다.",
            traits: ["Honesty-Humility", "Openness to Experience"]
        },
        {
            famousPeople: ["로빈 윌리엄스", "엘렌 드제너러스", "윌 스미스"],
            images: ["williams.jpg", "ellen.jpg", "will_smith.jpg"],
            description: "이 유형에 해당하는 사람은 감정적으로 깊이 있는 동시에 사람들과의 상호작용을 즐기는 사교적인 인물입니다. 유머와 따뜻함으로 많은 사람들을 즐겁게 하며, 감정적인 연기로 많은 이들에게 감동을 줍니다. 사교성을 통해 다양한 사람들과 소통하고, 감정적 깊이로 공감을 이끌어냅니다.",
            traits: ["Emotionality", "Extraversion"]
        },
        {
            famousPeople: ["다이애나 비", "오프라 윈프리", "에이미 포"],
            images: ["diana.jpg", "oprah.jpg", "amy_poehler.jpg"],
            description: "이 유형에 해당하는 사람은 감정적으로 민감하며 타인을 잘 이해하고 돕는 성격을 지닌 인물입니다. 자선활동을 통해 많은 사람들에게 도움을 주며, 따뜻한 마음과 공감 능력으로 많은 이들에게 희망을 줍니다. 감정적 민감성을 통해 타인의 고통을 이해하고, 적극적으로 돕는 활동을 펼칩니다.",
            traits: ["Emotionality", "Agreeableness"]
        },
        {
            famousPeople: ["조앤 K. 롤링", "버락 오바마", "마이클 조던"],
            images: ["rowling.jpg", "obama.jpg", "jordan.jpg"],
            description: "이 유형에 해당하는 사람은 감정적으로 민감하며 성실하게 자신의 일을 완성합니다. 이들은 자신의 감정을 글이나 행동으로 표현하며, 성실하게 작업에 몰두하여 놀라운 성과를 이루어냅니다. 이들은 감정적인 깊이와 성실함으로 많은 사람들에게 영감을 줍니다.",
            traits: ["Emotionality", "Conscientiousness"]
        },
        {
            famousPeople: ["에드가 앨런 포", "프레디 머큐리", "뱅크시"],
            images: ["poe.jpg", "mercury.jpg", "banksy.jpg"],
            description: "이 유형에 해당하는 사람은 감정적으로 깊이 있는 동시에, 창의적으로 표현하는 인물입니다. 예술과 문학에서 뛰어난 성과를 이루며, 감정의 깊이를 창의적으로 전달합니다. 이들은 감정적인 깊이와 창의성으로 많은 사람들에게 영감을 줍니다.",
            traits: ["Emotionality", "Openness to Experience"]
        },
        {
            famousPeople: ["오프라 윈프리", "톰 행크스", "드웨인 존슨"],
            images: ["oprah.jpg", "hanks.jpg", "johnson.jpg"],
            description: "이 유형에 해당하는 사람은 사교적이며 다른 사람들과 잘 지냅니다. 이들은 사람들과의 관계를 중요시하며, 타인에게 긍정적인 영향을 미칩니다. 사교성과 우호적인 성격을 통해 많은 사람들과 소통하고, 협력을 이끌어냅니다.",
            traits: ["Extraversion", "Agreeableness"]
        },
        {
            famousPeople: ["버락 오바마", "셰릴 샌드버그", "윌 스미스"],
            images: ["obama.jpg", "sandberg.jpg", "will_smith.jpg"],
            description: "이 유형에 해당하는 사람은 사교적이고 성실합니다. 이들은 사람들과의 상호작용을 즐기며, 책임감 있게 행동합니다. 사교성과 성실함을 바탕으로 리더십을 발휘하고, 많은 사람들에게 영감을 줍니다.",
            traits: ["Extraversion", "Conscientiousness"]
        },
        {
            famousPeople: ["리처드 브랜슨", "레디 가가", "니콜라 테슬라"],
            images: ["branson.jpg", "gaga.jpg", "tesla.jpg"],
            description: "이 유형에 해당하는 사람은 사교적이며 창의적입니다. 이들은 사람들과의 상호작용을 즐기며, 새로운 경험과 아이디어를 받아들입니다. 사교성과 창의성을 바탕으로 혁신적이고 다양한 업적을 이룹니다.",
            traits: ["Extraversion", "Openness to Experience"]
        },
        {
            famousPeople: ["제인 구달", "버락 오바마", "말라라 유사프자이"],
            images: ["goodall.jpg", "obama.jpg", "malala.jpg"],
            description: "이 유형에 해당하는 사람은 타인과 잘 지내며 성실합니다. 이들은 타인과의 협력을 중요시하며, 체계적으로 일을 처리합니다. 우호성과 성실성을 바탕으로 많은 사람들과 협력하며, 놀라운 성과를 이룹니다.",
            traits: ["Agreeableness", "Conscientiousness"]
        },
        {
            famousPeople: ["프레디 머큐리", "레오나르도 다 빈치", "에이미 와인하우스"],
            images: ["mercury.jpg", "da_vinci.jpg", "winehouse.jpg"],
            description: "이 유형에 해당하는 사람은 타인과 잘 지내며 창의적입니다. 이들은 타인과의 관계를 중요시하면서도, 새로운 경험과 아이디어를 즐깁니다. 우호성과 창의성을 바탕으로 예술과 혁신을 이룹니다.",
            traits: ["Agreeableness", "Openness to Experience"]
        },
        {
            famousPeople: ["스티브 잡스", "빌 게이츠", "니콜라 테슬라"],
            images: ["jobs.jpg", "gates.jpg", "tesla.jpg"],
            description: "이 유형에 해당하는 사람은 성실하면서도 창의적입니다. 이들은 책임감 있게 행동하며, 새로운 아이디어를 받아들입니다. 성실성과 창의성을 바탕으로 혁신적이고 놀라운 성과를 이룹니다.",
            traits: ["Conscientiousness", "Openness to Experience"]
        },
        {
            famousPeople: ["엘렌 드제너러스", "에드가 앨런 포", "윌 스미스"],
            images: ["ellen.jpg", "poe.jpg", "will_smith.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며, 감정적으로 깊이 느끼고, 사교적입니다. 이들은 타인에게 진실하게 대하며, 감정적으로 깊이 공감하고, 사람들과의 상호작용을 즐깁니다.",
            traits: ["Honesty-Humility", "Emotionality", "Extraversion"]
        },
        {
            famousPeople: ["요요마", "레오나르도 다 빈치", "엘리자베스 워런"],
            images: ["yo_yo_ma.jpg", "da_vinci.jpg", "warren.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며, 사교적이고 다양한 경험을 받아들입니다. 이들은 타인에게 진실하게 대하며, 사람들과의 상호작용을 즐기며, 새로운 경험을 추구합니다.",
            traits: ["Honesty-Humility", "Extraversion", "Openness to Experience"]
        },
        {
            famousPeople: ["앤 해서웨이", "마더 테레사", "조앤 K. 롤링"],
            images: ["hathaway.jpg", "mother_teresa.jpg", "rowling.jpg"],
            description: "이 유형에 해당하는 사람은 감정적으로 민감하고, 사교적이며, 성실하게 일합니다. 이들은 타인의 감정을 깊이 이해하며, 사람들과의 상호작용을 즐기고, 책임감 있게 행동합니다.",
            traits: ["Emotionality", "Extraversion", "Conscientiousness"]
        },
        {
            famousPeople: ["팀 쿡", "제인 구달", "버락 오바마"],
            images: ["cook.jpg", "goodall.jpg", "obama.jpg"],
            description: "이 유형에 해당하는 사람은 타인과 잘 지내며, 성실하고 창의적입니다. 이들은 타인과의 협력을 중요시하며, 체계적으로 일을 처리하고, 새로운 아이디어를 받아들입니다.",
            traits: ["Agreeableness", "Conscientiousness", "Openness to Experience"]
        },
        {
            famousPeople: ["미셸 오바마", "엘레노어 루즈벨트", "말라라 유사프자이"],
            images: ["michelle_obama.jpg", "roosevelt.jpg", "malala.jpg"],
            description: "이 유형에 해당하는 사람은 정직하고 겸손하며, 타인과 잘 지내고 성실하게 일합니다. 이들은 타인에게 진실하게 대하며, 협력적이고 책임감 있게 행동합니다.",
            traits: ["Honesty-Humility", "Agreeableness", "Conscientiousness"]
        }
    ];

    // 가장 높은 2가지 성격 특성을 찾습니다.
    const sortedTraits = Object.keys(results).sort((a, b) => results[b] - results[a]);
    const topTraits = sortedTraits.slice(0, 2);

    // 결과와 일치하는 유형을 찾습니다.
    let matchedType = personalityTypes.find(type => {
        return type.traits.every(trait => topTraits.includes(trait));
    });

    // 일치하는 유형이 없을 경우 첫 번째 유형을 기본으로 설정
    if (!matchedType) {
        matchedType = personalityTypes[0];
    }

    // 결과를 HTML에 표시합니다.
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <h2>${matchedType.famousPeople.join(', ')}</h2>
        <div class="images-container">
            ${matchedType.images.map(image => `<img src="images/${image}" alt="${image.split('.')[0]}">`).join('')}
        </div>
        <p>${matchedType.description}</p>
    `;

    // 차트를 생성합니다.
    const data = {
        labels: ['Honesty-Humility', 'Emotionality', 'Extraversion', 'Agreeableness', 'Conscientiousness', 'Openness to Experience'],
        datasets: [{
            label: 'HEXACO Test Results',
            data: [
                results["Honesty-Humility"],
                results["Emotionality"],
                results["Extraversion"],
                results["Agreeableness"],
                results["Conscientiousness"],
                results["Openness to Experience"]
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
            maintainAspectRatio: true,
            aspectRatio: 1,
            scales: {
                r: {
                    ticks: { beginAtZero: true }
                }
            }
        }
    };

    const ctx = document.getElementById('hexacoChart').getContext('2d');
    new Chart(ctx, config);
});
