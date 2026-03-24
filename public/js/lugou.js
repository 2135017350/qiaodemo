/**
 * 卢沟桥石狮风格谱系 - 交互脚本
 * 第一部分：凝固的艺术
 */

// ============================================
// 石狮数据库（含策展人解说）
// ============================================

const lionDatabase = [
    // 金代石狮
    {
        id: 'lion-001',
        name: '东华门北蹲狮',
        pose: '蹲踞式',
        dynasty: 'jin',
        dynastyName: '金代',
        year: '1192-1195',
        location: '东华门北侧',
        position: 1,
        tags: ['金代', '蹲踞', '威严', '古朴'],
        style: '金代古拙',
        curatorNote: '这尊石狮是卢沟桥现存最早的文化遗存之一。金代工匠以北方草原民族特有的雄健气质，塑造出一尊正气凛然的守望者。看那狮头硕大而方正，眉目间透露出契丹、女真族特有的刚毅神情。',
        description: '卢沟桥现存最早的金代石狮之一，造型古拙庄重，体现了金代石雕的典型风格。狮身敦实有力，四肢粗壮，显示出北方民族雄健粗犷的艺术特色。',
        features: [
            '狮头硕大，面部表情威严庄重',
            '鬃毛呈螺旋状，较短而整齐',
            '四肢粗壮，肌肉线条简洁分明',
            '底座为简单覆莲瓣式'
        ],
        historyContext: '靖康之变后，金人定鼎中原，将北方民族质朴刚健的审美趣味带入黄河流域。女真人崛起于白山黑水之间，以武力定天下，在这交通要津上留下了第一批镇守之狮。',
        position2: { x: 25, y: 35 },
        annotations: [
            { x: 45, y: 30, label: '螺旋状鬃毛', desc: '金代典型特征，鬃毛呈螺旋卷曲状，如草原劲风梳理过' },
            { x: 55, y: 45, label: '威严面容', desc: '面部方正，眉目威严，体现北方民族刚毅气质' }
        ],
        similar: ['lion-002', 'lion-003'],
        timeline: {
            prev: null,
            next: '元代石狮风格逐渐柔化'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'mane',
                label: '螺旋鬃毛',
                x: 45, y: 25,
                viewBox: '30 10 40 40',
                description: '金代典型螺旋鬃毛',
                detail: '鬃毛短而整齐，呈螺旋卷曲状，如草原劲风梳理过，层层叠压，绝无繁缛之饰。体现北方民族质朴刚健的审美。',
                dynastyStyle: '金代古拙'
            },
            {
                id: 'face',
                label: '威严面容',
                x: 55, y: 42,
                viewBox: '45 35 25 20',
                description: '北方民族刚毅气质',
                detail: '面部方正，眉目威严，透露出契丹、女真族特有的刚毅神情。不尚雕琢之美，而以气势取胜。',
                dynastyStyle: '金代古拙'
            },
            {
                id: 'paw',
                label: '握球狮爪',
                x: 35, y: 70,
                viewBox: '25 60 25 20',
                description: '前爪握球造型',
                detail: '前爪握球，寓意权势与威严。金代石狮四肢粗壮有力，肌肉线条简洁分明。',
                dynastyStyle: '金代古拙'
            }
        ]
    },
    {
        id: 'lion-002',
        name: '东华门南蹲狮',
        pose: '蹲踞式',
        dynasty: 'jin',
        dynastyName: '金代',
        year: '1192-1195',
        location: '东华门南侧',
        position: 2,
        tags: ['金代', '蹲踞', '对称', '古拙'],
        style: '金代古拙',
        curatorNote: '与北侧蹲狮相对，造型基本对称，体现了金代石狮的规整特点。金代石狮不尚雕琢之美，而以气势取胜——四肢粗壮有力，传达出一种无需张扬的威猛力量。',
        description: '与北侧蹲狮相对，造型基本对称，体现了金代石狮的规整特点。整体风格稳重朴实，是研究金代石雕艺术的重要实物资料。',
        features: [
            '造型与北狮基本对称',
            '狮爪握球，形象生动',
            '背部线条平直有力',
            '通高约1.8米'
        ],
        historyContext: '金代虽为异族统治，但积极吸纳汉文化，在都城南京（今北京）大兴土木。卢沟桥作为连接大都与中原的咽喉要道，其守护石狮自然也要体现出帝国的威严。',
        position2: { x: 30, y: 32 },
        annotations: [
            { x: 50, y: 50, label: '握球狮爪', desc: '前爪握球，寓意权势与威严，金元石狮常见造型' }
        ],
        similar: ['lion-001', 'lion-004'],
        timeline: {
            prev: null,
            next: '元代石狮延续金代风格'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'symmetry',
                label: '对称造型',
                x: 50, y: 50,
                viewBox: '35 30 30 40',
                description: '金代规整对称',
                detail: '与北侧蹲狮相对，造型基本对称。体现了金代石狮的规整特点——稳重朴实，不尚雕琢。',
                dynastyStyle: '金代古拙'
            },
            {
                id: 'paw-ball',
                label: '握球狮爪',
                x: 50, y: 75,
                viewBox: '40 65 25 20',
                description: '前爪握球',
                detail: '前爪握球，寓意权势与威严，是金元石狮常见造型。四肢粗壮有力，传达出无需张扬的威猛力量。',
                dynastyStyle: '金代古拙'
            },
            {
                id: 'body',
                label: '敦实身躯',
                x: 50, y: 55,
                viewBox: '30 40 40 35',
                description: '狮身敦实有力',
                detail: '狮身敦实有力，整体线条平直粗壮。显示北方民族雄健粗犷的艺术特色。',
                dynastyStyle: '金代古拙'
            }
        ]
    },
    // 元代石狮
    {
        id: 'lion-003',
        name: '望柱狮子（元初）',
        pose: '戏仔狮',
        dynasty: 'yuan',
        dynastyName: '元代',
        year: '1295',
        location: '主桥望柱',
        position: 3,
        tags: ['元代', '戏仔', '活泼', '精细'],
        style: '元代过渡',
        curatorNote: '跨越近两百年，这尊元代石狮已呈现出截然不同的风貌。蒙古人入主中原一百余年，南北文化在这一尊石狮身上悄然交融。工匠的刻刀游走于坚硬的青石之上，仿佛在描绘一幅水墨长卷。',
        description: '元代重修卢沟桥时雕刻的石狮，造型开始出现变化，鬃毛更加精细，整体风格向柔美方向发展。',
        features: [
            '鬃毛呈细密的螺旋纹',
            '表情相对温和',
            '肢体动作略显活泼',
            '整体比例更加协调'
        ],
        historyContext: '元代虽为蒙古人统治，但南北交通空前畅通。大运河贯通南北，各路工匠汇聚京城，将南方石雕的细腻手法与北方传统相结合。',
        position2: { x: 28, y: 38 },
        annotations: [
            { x: 40, y: 25, label: '精细鬃毛', desc: '元代鬃毛更加细密，工艺较金代更为精细' },
            { x: 60, y: 50, label: '戏仔姿态', desc: '狮身微侧，呈现活泼姿态，亲近游人' }
        ],
        similar: ['lion-001', 'lion-005'],
        timeline: {
            prev: '金代石狮风格古拙雄健',
            next: '明代石狮更加精美繁复'
        }
    },
    {
        id: 'lion-004',
        name: '望柱狮子（元末）',
        pose: '戏仔狮',
        dynasty: 'yuan',
        dynastyName: '元代',
        year: '1365',
        location: '主桥望柱',
        position: 4,
        tags: ['元代', '戏仔', '晚期', '成熟'],
        style: '元代成熟',
        curatorNote: '元代晚期雕刻的石狮，工艺已相当成熟。S形的大波浪鬃毛，一改金代的短促整齐，而如江南水草般柔美舒展。这正是文化交融的微观见证——既有草原民族的根基，又吸纳了江南的柔美意趣。',
        description: '元代晚期雕刻的石狮，工艺已相当成熟，鬃毛精细繁复，显示出元代石雕艺术的高超水平。',
        features: [
            '鬃毛呈S形大波浪',
            '表情生动，略带微笑',
            '肢体动作更加灵活',
            '底座有卷草纹饰'
        ],
        historyContext: '大运河的畅通使南方工匠北上，他们带来的细腻手法深刻影响了元代中晚期的石雕风格。这尊石狮正是南北文化交融的产物。',
        position2: { x: 32, y: 36 },
        annotations: [
            { x: 48, y: 28, label: 'S形鬃毛', desc: '元末典型鬃毛造型，大波浪状，如江南水草' }
        ],
        similar: ['lion-003', 'lion-006'],
        timeline: {
            prev: '元初石狮开始变化',
            next: '明代石狮延续并发展'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'wave-mane',
                label: 'S形大波浪',
                x: 48, y: 25,
                viewBox: '25 10 45 35',
                description: '元代渐趋柔美',
                detail: '鬃毛不再短促整齐，而呈S形大波浪，如江南水草在春风中舒展。南北雕工匠艺开始交融。',
                dynastyStyle: '南北交融'
            },
            {
                id: 'expression',
                label: '灵动表情',
                x: 52, y: 45,
                viewBox: '45 38 20 18',
                description: '目光温和灵动',
                detail: '目光温润，神态安详。一改金代的威严，而带几分亲昵与灵动，体现文化交融的新气象。',
                dynastyStyle: '南北交融'
            },
            {
                id: 'pose',
                label: '微微扭转',
                x: 45, y: 60,
                viewBox: '30 45 35 30',
                description: 'S形优雅轮廓',
                detail: '狮身微微扭转，前爪握球，呈现出S形的优雅轮廓。这种灵动活泼的姿态，开启了明代的先河。',
                dynastyStyle: '南北交融'
            }
        ]
    },
    // 明代石狮
    {
        id: 'lion-005',
        name: '主桥望柱狮（明前期）',
        pose: '戏仔狮',
        dynasty: 'ming',
        dynastyName: '明代',
        year: '1444',
        location: '主桥中段',
        position: 5,
        tags: ['明代', '戏仔', '精美', '繁复'],
        style: '明代精致',
        curatorNote: '明代正统年间重修时雕刻，石狮工艺更加精美，装饰细节丰富。万历年间正是明代社会经济的鼎盛期——资本主义萌芽，工艺水平举世无双。石狮艺术也攀上了技术的高峰。',
        description: '明代正统年间重修时雕刻，石狮工艺更加精美，装饰细节丰富，体现了明代石雕艺术的繁荣。',
        features: [
            '鬃毛呈密集的卷云状',
            '胸前佩戴铃铛或璎珞',
            '表情温顺，神态安详',
            '整体线条流畅优美'
        ],
        historyContext: '明代中后期是社会经济发展的黄金期。苏杭织造、景德镇制瓷等手工业举世无双，在这盛世余晖中，石狮艺术也达到了精美繁复的巅峰。',
        position2: { x: 26, y: 40 },
        annotations: [
            { x: 42, y: 22, label: '卷云鬃毛', desc: '明代典型鬃毛，如云卷曲，层层叠叠' },
            { x: 55, y: 42, label: '璎珞装饰', desc: '颈部佩戴璎珞，增添华贵之气，明代常见' }
        ],
        similar: ['lion-004', 'lion-007'],
        timeline: {
            prev: '元代石狮奠定基础',
            next: '明末石狮更加写实'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'cloud-mane',
                label: '卷云鬃毛',
                x: 42, y: 22,
                viewBox: '25 8 40 35',
                description: '明代典型鬃毛',
                detail: '鬃毛呈密集的卷云状，如云卷曲，层层叠叠。万历年间工艺水平登峰造极——工而不拙，细而不碎。',
                dynastyStyle: '盛世华章'
            },
            {
                id: 'yingluo',
                label: '璎珞装饰',
                x: 55, y: 50,
                viewBox: '45 45 25 20',
                description: '颈部璎珞',
                detail: '胸前佩戴铃铛或璎珞，增添华贵之气。明代社会经济鼎盛，工艺举世无双，装饰艺术攀上高峰。',
                dynastyStyle: '盛世华章'
            },
            {
                id: 'gentle-face',
                label: '温顺面容',
                x: 50, y: 42,
                viewBox: '42 35 20 18',
                description: '表情温顺安详',
                detail: '目光温润，神态安详。一改金元的威严，呈现出盛世时期的自信与从容。',
                dynastyStyle: '盛世华章'
            }
        ]
    },
    {
        id: 'lion-006',
        name: '主桥望柱狮（明中期）',
        pose: '戏仔狮',
        dynasty: 'ming',
        dynastyName: '明代',
        year: '1578',
        location: '主桥西段',
        position: 6,
        tags: ['明代', '戏仔', '成熟', '写实'],
        style: '明代成熟',
        curatorNote: '明代万历年间雕刻，石狮造型达到成熟期的巅峰。请细看那鬃毛——分为多层，呈云卷状向四面舒展，每一根鬃毛都清晰可数。工而不拙，细而不碎，华美中自有庄严气象。',
        description: '明代万历年间雕刻的石狮，工艺精湛，形象生动，是明代石狮的代表作之一。',
        features: [
            '鬃毛分多层，层次分明',
            '双目圆睁，有神采',
            '狮身曲线优美，动感十足',
            '底座有精细的仰覆莲纹'
        ],
        historyContext: '万历年间正是明代社会经济的鼎盛期。商品经济的发展催生了精湛的工艺水平，工匠们有足够的时间和精力在石狮上精雕细琢。',
        position2: { x: 30, y: 34 },
        annotations: [
            { x: 45, y: 30, label: '分层次鬃毛', desc: '鬃毛分为多层，工艺极为精细' },
            { x: 52, y: 48, label: '写实狮爪', desc: '狮爪肌肉感强，细节丰富' }
        ],
        similar: ['lion-005', 'lion-008'],
        timeline: {
            prev: '明前期石狮开始精美化',
            next: '清代石狮形成独特风格'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'layered-mane',
                label: '分层次鬃毛',
                x: 45, y: 28,
                viewBox: '25 8 45 35',
                description: '万历年间巅峰工艺',
                detail: '鬃毛分为多层，呈云卷状向四面舒展。工而不拙，细而不碎——每一根鬃毛都清晰可数。',
                dynastyStyle: '盛世华章'
            },
            {
                id: 'realistic-paw',
                label: '写实狮爪',
                x: 52, y: 65,
                viewBox: '42 55 25 25',
                description: '肌肉感狮爪',
                detail: '狮爪肌肉感强，细节丰富。万历年间商品经济发展，工匠有足够时间精雕细琢。',
                dynastyStyle: '盛世华章'
            },
            {
                id: 'elegant-body',
                label: '曲线优美',
                x: 40, y: 55,
                viewBox: '25 40 40 35',
                description: '狮身动感十足',
                detail: '狮身曲线优美，动感十足。呈现出盛世时期石狮艺术的成熟与自信。',
                dynastyStyle: '盛世华章'
            }
        ]
    },
    {
        id: 'lion-007',
        name: '主桥望柱狮（明后期）',
        pose: '戏仔狮',
        dynasty: 'ming',
        dynastyName: '明代',
        year: '1620',
        location: '主桥东段',
        position: 7,
        tags: ['明代', '戏仔', '晚期', '写实'],
        style: '明代晚期',
        curatorNote: '明代末年雕刻，石狮造型更加写实。目光温润中带着几分笑意，肢体动作灵活自然。虽仍承袭万历年间精工细作的传统，却也开始出现向清代风格过渡的迹象。',
        description: '明代末年雕刻的石狮，造型更加写实，动态感更强，开始出现向清代风格过渡的迹象。',
        features: [
            '鬃毛呈自然波浪状',
            '表情更加人性化',
            '肢体动作灵活自然',
            '整体风格趋于写实'
        ],
        historyContext: '明末虽政治腐败，但商品经济依然繁荣。匠籍制度的松动使更多民间工匠参与官方工程，石狮风格也开始出现更多民间气息。',
        position2: { x: 28, y: 36 },
        annotations: [
            { x: 48, y: 32, label: '自然波浪鬃', desc: '鬃毛更趋自然，少装饰性' },
            { x: 58, y: 52, label: '动态姿势', desc: '狮身呈扭转状，动态感强' }
        ],
        similar: ['lion-006', 'lion-009'],
        timeline: {
            prev: '明中期石狮达到成熟',
            next: '清代形成独特风格'
        }
    },
    // 清代石狮
    {
        id: 'lion-008',
        name: '桥头镇狮（清初）',
        pose: '蹲踞式',
        dynasty: 'qing',
        dynastyName: '清代',
        year: '1691',
        location: '桥头',
        position: 8,
        tags: ['清代', '蹲踞', '威武', '雄壮'],
        style: '清代威武',
        curatorNote: '清代康熙年间雕刻，作为桥头镇守之狮，造型格外威武庄严。乾隆皇帝六下江南，对工艺美术的审美趣味深刻影响了这时期的石狮。鬃毛向四周呈放射状展开，如同一轮光芒万丈的金轮。',
        description: '清代康熙年间雕刻，作为桥头镇守之狮，造型格外威武庄严，体现了清代皇家石雕的典型风格。',
        features: [
            '体型硕大，气势雄伟',
            '鬃毛呈螺旋状向四周展开',
            '表情威严，不怒自威',
            '底座有云龙纹饰'
        ],
        historyContext: '清初统治者积极笼络汉族工匠，将宫廷趣味与民间工艺相结合。康熙、雍正、乾隆三朝是清代艺术的黄金期，石狮风格也趋于定型。',
        position2: { x: 35, y: 32 },
        annotations: [
            { x: 50, y: 25, label: '展开式鬃毛', desc: '清代典型鬃毛，向四周呈放射状' },
            { x: 48, y: 45, label: '威严面容', desc: '清代狮面更加威严庄重' }
        ],
        similar: ['lion-001', 'lion-009'],
        timeline: {
            prev: '明代石狮奠定基础',
            next: '清中期石狮达到鼎盛'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'radiant-mane',
                label: '放射状鬃毛',
                x: 50, y: 25,
                viewBox: '25 5 50 40',
                description: '清代典型鬃毛',
                detail: '鬃毛向四周呈放射状展开，如同一轮光芒万丈的金轮。乾隆皇帝六下江南的审美深刻影响了这一造型。',
                dynastyStyle: '威武庄严'
            },
            {
                id: 'majestic-face',
                label: '威严面容',
                x: 48, y: 45,
                viewBox: '40 38 22 18',
                description: '不怒自威',
                detail: '清代狮面更加威严庄重，体现帝国威仪。作为桥头镇守之狮，气势格外雄伟。',
                dynastyStyle: '威武庄严'
            },
            {
                id: 'cloud-base',
                label: '云龙纹饰',
                x: 50, y: 80,
                viewBox: '35 70 30 20',
                description: '底座云龙纹',
                detail: '底座有云龙纹饰，体现清代皇家石雕的典型风格。清初积极笼络汉族工匠，融合宫廷与民间工艺。',
                dynastyStyle: '威武庄严'
            }
        ]
    },
    {
        id: 'lion-009',
        name: '桥头镇狮（清中期）',
        pose: '蹲踞式',
        dynasty: 'qing',
        dynastyName: '清代',
        year: '1768',
        location: '桥头',
        position: 9,
        tags: ['清代', '蹲踞', '精美', '鼎盛'],
        style: '清代鼎盛',
        curatorNote: '清代乾隆年间雕刻，代表了卢沟桥石狮艺术的最高成就。技法登峰造极——全身布满云纹、龙纹、缠枝纹等装饰，几乎不留空白。然而，极致的工整中也预示着程式化的开始。',
        description: '清代乾隆年间雕刻，代表了卢沟桥石狮艺术的最高水平。工艺精湛，装饰华丽，体现了清代宫廷艺术的审美追求。',
        features: [
            '鬃毛极其繁复华丽',
            '全身布满精细纹饰',
            '表情威武中见慈祥',
            '底座有完整的须弥座式'
        ],
        historyContext: '乾隆皇帝是石狮艺术的狂热爱好者，他六下江南，将所见所闻融入宫廷审美。这时期的作品融合了历代精华，却也开启了程式化的先河。',
        position2: { x: 32, y: 38 },
        annotations: [
            { x: 42, y: 24, label: '繁复鬃毛', desc: '清代鬃毛最为繁复华丽' },
            { x: 55, y: 42, label: '纹饰满布', desc: '全身布满云纹、龙纹等装饰' },
            { x: 50, y: 58, label: '须弥座', desc: '底座采用须弥座式，层级分明' }
        ],
        similar: ['lion-008', 'lion-010'],
        timeline: {
            prev: '清初石狮形成风格',
            next: '清末石狮趋于程式化'
        },
        // 细节探索热点
        hotspots: [
            {
                id: ' ornate-mane',
                label: '繁复鬃毛',
                x: 42, y: 24,
                viewBox: '20 5 45 35',
                description: '清代鬃毛巅峰',
                detail: '鬃毛极其繁复华丽，达到清代石狮艺术的最高成就。乾隆皇帝六下江南，将宫廷审美融入民间工艺。',
                dynastyStyle: '威武庄严'
            },
            {
                id: 'full-ornament',
                label: '纹饰满布',
                x: 55, y: 55,
                viewBox: '45 45 25 25',
                description: '全身云龙纹',
                detail: '全身布满云纹、龙纹、缠枝纹等装饰，几乎不留空白。技法登峰造极，却也开启了程式化的先河。',
                dynastyStyle: '威武庄严'
            },
            {
                id: 'xumi-base',
                label: '须弥座',
                x: 50, y: 80,
                viewBox: '35 70 30 20',
                description: '须弥座式底座',
                detail: '底座采用须弥座式，层级分明。融合了历代精华，代表清代宫廷艺术的审美追求。',
                dynastyStyle: '威武庄严'
            }
        ]
    },
    {
        id: 'lion-010',
        name: '桥头镇狮（清末）',
        pose: '蹲踞式',
        dynasty: 'qing',
        dynastyName: '清代',
        year: '1895',
        location: '桥头',
        position: 10,
        tags: ['清代', '蹲踞', '晚期', '程式化'],
        style: '清代晚期',
        curatorNote: '清代末年雕刻，石狮造型趋于程式化。技法仍然精湛，但创新不足。鬃毛造型固定，装饰风格雷同，整体略显呆板。这是一位帝国余晖中最后的绝唱。',
        description: '清代末年雕刻，石狮造型趋于程式化，虽然工艺仍然精细，但创新不足，代表了传统石狮艺术的尾声。',
        features: [
            '鬃毛造型较为固定',
            '装饰风格趋于雷同',
            '整体略显呆板',
            '底座简化'
        ],
        historyContext: '晚清内忧外患，传统工艺失去了往日的滋养。虽然匠人的手艺仍在，但石狮艺术已难以突破前代高峰。辛亥革命后，传统石狮雕刻走向衰落。',
        position2: { x: 30, y: 36 },
        annotations: [
            { x: 50, y: 28, label: '程式化鬃毛', desc: '清代晚期鬃毛趋于标准化' }
        ],
        similar: ['lion-009'],
        timeline: {
            prev: '清中期达到鼎盛',
            next: '民国后石狮艺术衰落'
        },
        // 细节探索热点
        hotspots: [
            {
                id: 'std-mane',
                label: '程式化鬃毛',
                x: 50, y: 28,
                viewBox: '30 8 40 35',
                description: '清代晚期标准化',
                detail: '鬃毛造型趋于标准化，创新不足。虽然匠人手艺仍在，但石狮艺术已难以突破前代高峰。',
                dynastyStyle: '程式定型'
            },
            {
                id: 'rigid-style',
                label: '雷同风格',
                x: 45, y: 50,
                viewBox: '35 40 30 30',
                description: '装饰风格趋同',
                detail: '装饰风格趋于雷同，整体略显呆板。晚清内忧外患，传统工艺失去了往日的滋养。',
                dynastyStyle: '程式定型'
            },
            {
                id: 'final-echo',
                label: '帝国余晖',
                x: 50, y: 75,
                viewBox: '38 65 25 25',
                description: '最后的绝唱',
                detail: '清代末年雕刻，是一位帝国余晖中最后的绝唱。辛亥革命后，传统石狮雕刻走向衰落。',
                dynastyStyle: '程式定型'
            }
        ]
    }
];

// ============================================
// 风格配置
// ============================================

const styleConfig = {
    dynasties: {
        jin: { 
            name: '金代 (1115-1234)', 
            color: '#8B0000', 
            class: 'jin',
            theme: '胡风初入 · 古拙雄健',
            features: '狮头硕大、鬃毛螺旋、四肢粗壮、威严庄重'
        },
        yuan: { 
            name: '元代 (1271-1368)', 
            color: '#2E8B57', 
            class: 'yuan',
            theme: '南北交融 · 渐趋柔美',
            features: '鬃毛S形、姿态灵动、表情温和、曲线优美'
        },
        ming: { 
            name: '明代 (1368-1644)', 
            color: '#191970', 
            class: 'ming',
            theme: '盛世华章 · 精美繁复',
            features: '鬃毛云卷、璎珞装饰、目光温润、曲线优美'
        },
        qing: { 
            name: '清代 (1644-1912)', 
            color: '#8B4513', 
            class: 'qing',
            theme: '威武庄严 · 程式定型',
            features: '鬃毛放射、纹饰满布、威武庄严、须弥座式'
        }
    },
    poses: {
        '蹲踞式': '庄严威武，守护桥头',
        '戏仔狮': '活泼生动，亲近游人'
    }
};

// ============================================
// 石狮SVG生成器
// ============================================

function generateLionSVG(lion, size = 150) {
    const colors = {
        jin: { body: '#7a6a5a', mane: '#5a4a3a', base: '#4a4a4a' },
        yuan: { body: '#8a7a6a', mane: '#6a5a4a', base: '#5a5a5a' },
        ming: { body: '#9a8a7a', mane: '#7a6a5a', base: '#6a6a6a' },
        qing: { body: '#8a7a6a', mane: '#5a4a3a', base: '#5a5a5a' }
    };
    
    const c = colors[lion.dynasty];
    
    // 根据朝代生成不同的鬃毛样式
    let maneSVG = '';
    if (lion.dynasty === 'jin') {
        maneSVG = `<path d="M${size*0.35} ${size*0.25} Q${size*0.3} ${size*0.2}, ${size*0.4} ${size*0.18} Q${size*0.5} ${size*0.2}, ${size*0.55} ${size*0.22} Q${size*0.6} ${size*0.25}, ${size*0.65} ${size*0.28}" fill="none" stroke="${c.mane}" stroke-width="3"/>`;
    } else if (lion.dynasty === 'yuan') {
        maneSVG = `<path d="M${size*0.3} ${size*0.22} C${size*0.35} ${size*0.15}, ${size*0.45} ${size*0.18}, ${size*0.5} ${size*0.2} S${size*0.65} ${size*0.22}, ${size*0.7} ${size*0.3}" fill="none" stroke="${c.mane}" stroke-width="2.5"/>`;
    } else if (lion.dynasty === 'ming') {
        maneSVG = `<path d="M${size*0.28} ${size*0.2} Q${size*0.35} ${size*0.12}, ${size*0.45} ${size*0.15} T${size*0.6} ${size*0.18} T${size*0.72} ${size*0.25}" fill="none" stroke="${c.mane}" stroke-width="2"/>`;
    } else {
        maneSVG = `<ellipse cx="${size*0.5}" cy="${size*0.22}" rx="${size*0.2}" ry="${size*0.12}" fill="${c.mane}" opacity="0.8"/>`;
    }
    
    return `
        <svg class="lion-svg" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
            <!-- 底座 -->
            <rect x="${size*0.25}" y="${size*0.85}" width="${size*0.5}" height="${size*0.12}" rx="2" fill="${c.base}"/>
            <rect x="${size*0.3}" y="${size*0.8}" width="${size*0.4}" height="${size*0.08}" rx="2" fill="${c.base}" opacity="0.7"/>
            
            <!-- 狮身 -->
            <ellipse cx="${size*0.5}" cy="${size*0.6}" rx="${size*0.22}" ry="${size*0.25}" fill="${c.body}"/>
            
            <!-- 鬃毛 -->
            ${maneSVG}
            
            <!-- 狮头 -->
            <circle cx="${size*0.5}" cy="${size*0.35}" r="${size*0.15}" fill="${c.body}"/>
            
            <!-- 面部特征 -->
            <circle cx="${size*0.43}" cy="${size*0.33}" r="${size*0.025}" fill="#2a2a2a"/>
            <circle cx="${size*0.57}" cy="${size*0.33}" r="${size*0.025}" fill="#2a2a2a"/>
            <ellipse cx="${size*0.5}" cy="${size*0.4}" rx="${size*0.03}" ry="${size*0.02}" fill="#3a3a3a"/>
            
            <!-- 耳朵 -->
            <ellipse cx="${size*0.35}" cy="${size*0.28}" rx="${size*0.04}" ry="${size*0.05}" fill="${c.body}"/>
            <ellipse cx="${size*0.65}" cy="${size*0.28}" rx="${size*0.04}" ry="${size*0.05}" fill="${c.body}"/>
            
            <!-- 前爪 -->
            <ellipse cx="${size*0.4}" cy="${size*0.78}" rx="${size*0.06}" ry="${size*0.04}" fill="${c.body}"/>
            <ellipse cx="${size*0.6}" cy="${size*0.78}" rx="${size*0.06}" ry="${size*0.04}" fill="${c.body}"/>
            
            <!-- 铃铛/璎珞 (明清) -->
            ${lion.dynasty === 'ming' || lion.dynasty === 'qing' ? `
                <circle cx="${size*0.5}" cy="${size*0.55}" r="${size*0.025}" fill="#c9a227"/>
            ` : ''}
        </svg>
    `;
}

function generateLionCloseup(lion, size = 300) {
    return generateLionSVG(lion, size);
}

// ============================================
// 初始化
// ============================================

let currentFilter = {
    dynasties: [],
    poses: []
};

let highlightedLion = null;
let currentLionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initFilters();
    initDetailOverlay();
    initGalleryNav();
});

// 初始化画廊
function initGallery() {
    const grid = document.getElementById('lionGrid');
    if (!grid) return;
    
    lionDatabase.forEach((lion, index) => {
        const card = createLionCard(lion);
        card.style.animationDelay = `${index * 0.05}s`;
        grid.appendChild(card);
    });
    
    updateStats();
    
    // 初始化时间滑动条
    initTimeSlider();
}

// 创建石狮卡片
function createLionCard(lion) {
    const card = document.createElement('div');
    card.className = 'lion-card';
    card.dataset.id = lion.id;
    card.dataset.dynasty = lion.dynasty;
    card.dataset.pose = lion.pose;

    card.innerHTML = `
        <div class="lion-3d-container">
            <div class="lion-3d">
                ${generateLionSVG(lion)}
            </div>
            <div class="lion-era ${lion.dynasty}">${lion.dynastyName}</div>
            <!-- 细节探索热点 -->
            <div class="detail-hotspots">
                ${generateHotspots(lion)}
            </div>
            <!-- 浮动详情标签 -->
            <div class="detail-popup" id="popup-${lion.id}">
                <div class="popup-content">
                    <div class="popup-header">
                        <span class="popup-icon" id="popupIcon-${lion.id}"></span>
                        <span class="popup-title" id="popupTitle-${lion.id}"></span>
                    </div>
                    <p class="popup-desc" id="popupDesc-${lion.id}"></p>
                </div>
            </div>
        </div>
        <div class="lion-info">
            <div class="lion-name">${lion.name}</div>
            <div class="lion-pose">${lion.pose}</div>
            <div class="style-tags">
                ${lion.tags.slice(0, 2).map(tag => `<span class="style-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    // 绑定热点事件
    initCardHotspots(card, lion);

    card.addEventListener('click', () => openDetail(lion));

    return card;
}

// 生成热点标记
function generateHotspots(lion) {
    const hotspots = lion.annotations || [
        { x: 50, y: 30, type: 'mane', label: '鬃毛' },
        { x: 50, y: 55, type: 'body', label: '身体' },
        { x: 50, y: 75, type: 'feet', label: '足部' }
    ];

    return hotspots.map((spot, index) => `
        <button class="hotspot" data-type="${spot.type}" data-label="${spot.label}"
                style="left: ${spot.x}%; top: ${spot.y}%;"
                title="点击查看${spot.label}细节">
            <span class="hotspot-ring"></span>
            <span class="hotspot-dot"></span>
        </button>
    `).join('');
}

// 初始化卡片热点交互
function initCardHotspots(card, lion) {
    const hotspots = card.querySelectorAll('.hotspot');
    const popup = card.querySelector('.detail-popup');
    let activeHotspot = null;

    hotspots.forEach((hotspot, index) => {
        const type = hotspot.dataset.type;
        const label = hotspot.dataset.label;

        // 获取对应部位的解释
        const annotation = lion.annotations?.find(a => a.label === label) || {};

        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();

            // 如果点击的是已激活的热点，关闭它
            if (activeHotspot === index) {
                closeHotspot();
                return;
            }

            // 关闭其他热点
            hotspots.forEach(h => h.classList.remove('active'));
            activeHotspot = index;

            // 激活当前热点
            hotspot.classList.add('active');

            // 显示弹出框
            showHotspotPopup(popup, hotspot, type, label, annotation.desc || getDefaultAnnotation(lion.dynasty, type), lion);
        });
    });

    // 点击卡片空白处关闭弹出框
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('hotspot')) {
            closeHotspot();
        }
    });

    function closeHotspot() {
        hotspots.forEach(h => h.classList.remove('active'));
        popup.classList.remove('active');
        popup.style.transform = '';
        popup.style.opacity = '0';
        activeHotspot = null;
    }
}

// 获取默认注解
function getDefaultAnnotation(dynasty, type) {
    const annotations = {
        jin: {
            mane: '金代鬃毛短而整齐，呈螺旋状层层叠压，如草原劲风梳理过的鬃毛',
            body: '身体敦实有力，四肢粗壮，体现北方民族雄健粗犷的艺术特色',
            feet: '四肢粗壮有力，肌肉线条简洁分明，传达无需张扬的威猛力量'
        },
        yuan: {
            mane: '元代鬃毛呈S形大波浪，如江南水草在春风中轻轻摇曳',
            body: '身体微微扭转，开始呈现江南的柔美意趣',
            feet: '姿态灵动活泼，前爪握球透出几分亲昵与灵动'
        },
        ming: {
            mane: '明代鬃毛如云卷般分层，精美繁复，佩戴璎珞装饰',
            body: '身体曲线优美，华美中自有庄严气象',
            feet: '四肢纤细灵动，体现明代工艺水平的登峰造极'
        },
        qing: {
            mane: '清代鬃毛向四周放射状展开，全身布满纹饰',
            body: '身体略显程式化，技法登峰造极后的帝国余晖',
            feet: '足部装饰繁复，须弥座式底座，体现清代审美'
        }
    };

    return annotations[dynasty]?.[type] || '点击查看细节';
}

// 显示热点弹出框
function showHotspotPopup(popup, hotspot, type, label, desc, lion) {
    const popupContent = popup.querySelector('.popup-content');
    const popupTitle = popup.querySelector('.popup-title');
    const popupDesc = popup.querySelector('.popup-desc');

    // 设置弹出框位置
    const rect = hotspot.getBoundingClientRect();
    const cardRect = popup.parentElement.getBoundingClientRect();

    popup.style.left = `${rect.left - cardRect.left + 20}px`;
    popup.style.top = `${rect.top - cardRect.top - 10}px`;
    popup.style.transform = 'scale(1)';
    popup.style.opacity = '1';

    // 设置内容
    popupTitle.textContent = `${label}`;
    popupDesc.textContent = desc;

    // 添加朝代标识颜色
    popup.className = `detail-popup active ${lion.dynasty}-popup`;

    // 3秒后自动关闭
    setTimeout(() => {
        popup.style.opacity = '0';
        popup.style.transform = 'scale(0.9)';
        hotspot.classList.remove('active');
    }, 3500);
}

// 默认注解数据

// 初始化筛选器
function initFilters() {
    const dynastyOptions = document.querySelectorAll('.filter-option[data-type="dynasty"]');
    dynastyOptions.forEach(option => {
        option.addEventListener('click', function() {
            const dynasty = this.dataset.dynasty;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                currentFilter.dynasties = currentFilter.dynasties.filter(d => d !== dynasty);
            } else {
                this.classList.add('active');
                currentFilter.dynasties.push(dynasty);
            }
            
            applyFilters();
        });
    });
    
    const poseOptions = document.querySelectorAll('.filter-option[data-type="pose"]');
    poseOptions.forEach(option => {
        option.addEventListener('click', function() {
            const pose = this.dataset.pose;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                currentFilter.poses = currentFilter.poses.filter(p => p !== pose);
            } else {
                this.classList.add('active');
                currentFilter.poses.push(pose);
            }
            
            applyFilters();
        });
    });
}

// 应用筛选
function applyFilters() {
    const cards = document.querySelectorAll('.lion-card');
    
    cards.forEach(card => {
        const dynasty = card.dataset.dynasty;
        const pose = card.dataset.pose;
        
        const dynastyMatch = currentFilter.dynasties.length === 0 || currentFilter.dynasties.includes(dynasty);
        const poseMatch = currentFilter.poses.length === 0 || currentFilter.poses.includes(pose);
        
        if (dynastyMatch && poseMatch) {
            card.classList.remove('dimmed');
        } else {
            card.classList.add('dimmed');
        }
    });
    
    updateStats();
}

// 更新统计
function updateStats() {
    const visibleCards = document.querySelectorAll('.lion-card:not(.dimmed)');
    const totalCount = document.getElementById('totalCount');
    const visibleCount = document.getElementById('visibleCount');
    
    if (totalCount) totalCount.textContent = lionDatabase.length;
    if (visibleCount) visibleCount.textContent = visibleCards.length;
}

// ============================================
// 详情浮层
// ============================================

function initDetailOverlay() {
    const overlay = document.getElementById('detailOverlay');
    const closeBtn = document.getElementById('detailClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeDetail);
    }
    
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeDetail();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDetail();
        }
        if (e.key === 'ArrowLeft') {
            prevLion();
        }
        if (e.key === 'ArrowRight') {
            nextLion();
        }
    });
}

// 画廊导航
function initGalleryNav() {
    const prevBtn = document.getElementById('prevLion');
    const nextBtn = document.getElementById('nextLion');
    
    if (prevBtn) prevBtn.addEventListener('click', prevLion);
    if (nextBtn) nextBtn.addEventListener('click', nextLion);
}

function prevLion() {
    if (highlightedLion) {
        const currentIndex = lionDatabase.findIndex(l => l.id === highlightedLion.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : lionDatabase.length - 1;
        openDetail(lionDatabase[prevIndex]);
    }
}

function nextLion() {
    if (highlightedLion) {
        const currentIndex = lionDatabase.findIndex(l => l.id === highlightedLion.id);
        const nextIndex = currentIndex < lionDatabase.length - 1 ? currentIndex + 1 : 0;
        openDetail(lionDatabase[nextIndex]);
    }
}

// 打开详情
function openDetail(lion) {
    const overlay = document.getElementById('detailOverlay');
    if (!overlay) return;
    
    currentLionIndex = lionDatabase.findIndex(l => l.id === lion.id);
    highlightedLion = lion;
    
    const era = styleConfig.dynasties[lion.dynasty];
    
    // 更新指示器
    const indicator = document.getElementById('galleryIndicator');
    if (indicator) {
        indicator.textContent = `${currentLionIndex + 1} / ${lionDatabase.length}`;
    }
    
    // 更新头部
    const headerHTML = `
        <div class="detail-era ${era.class}">${era.name}</div>
        <div class="detail-id">${lion.location} · ${lion.year}年</div>
    `;
    document.getElementById('detailHeader').innerHTML = headerHTML;
    
    document.getElementById('detailTitle').textContent = lion.name;
    document.getElementById('detailSubtitle').textContent = `${lion.pose} · ${lion.location}`;
    
    // 更新特写图
    document.getElementById('lionCloseup').innerHTML = generateLionCloseup(lion, 300);
    
    // 添加标注点
    const annotationsContainer = document.getElementById('annotationsContainer');
    annotationsContainer.innerHTML = '';
    
    if (lion.annotations) {
        lion.annotations.forEach((ann, index) => {
            const marker = document.createElement('div');
            marker.className = 'annotation-marker';
            marker.textContent = index + 1;
            marker.style.left = `${ann.x}%`;
            marker.style.top = `${ann.y}%`;
            
            const tooltip = document.createElement('div');
            tooltip.className = 'annotation-tooltip';
            tooltip.innerHTML = `<strong>${ann.label}</strong><br>${ann.desc}`;
            tooltip.style.left = `${ann.x + 2}%`;
            tooltip.style.top = `${ann.y}%`;
            
            annotationsContainer.appendChild(marker);
            annotationsContainer.appendChild(tooltip);
        });
    }
    
    // 更新策展人解说
    const curatorNote = document.getElementById('curatorNote');
    if (curatorNote) {
        curatorNote.innerHTML = `<p>${lion.curatorNote}</p>`;
    }
    
    // 更新特征列表
    const featuresHTML = lion.features.map(f => `
        <li class="feature-item">
            <span class="feature-icon">◆</span>
            <span class="feature-text">${f}</span>
        </li>
    `).join('');
    document.getElementById('featureList').innerHTML = featuresHTML;
    
    // 更新历史语境
    const historyContext = document.getElementById('historyContext');
    if (historyContext) {
        historyContext.textContent = lion.historyContext;
    }
    
    // 更新风格演变坐标
    const timelineHTML = `
        <div class="timeline-mini-item current">
            <div class="timeline-mini-date">${lion.year}年</div>
            <div class="timeline-mini-desc">${lion.dynastyName}${lion.name}</div>
        </div>
        ${lion.timeline.prev ? `
            <div class="timeline-mini-item">
                <div class="timeline-mini-date">之前</div>
                <div class="timeline-mini-desc">${lion.timeline.prev}</div>
            </div>
        ` : ''}
        ${lion.timeline.next ? `
            <div class="timeline-mini-item">
                <div class="timeline-mini-date">之后</div>
                <div class="timeline-mini-desc">${lion.timeline.next}</div>
            </div>
        ` : ''}
    `;
    document.getElementById('timelineMini').innerHTML = timelineHTML;
    
    // 更新对比展示
    updateComparison(lion);
    
    // 显示浮层
    overlay.classList.add('active');
}

// 更新对比展示
function updateComparison(lion) {
    const container = document.getElementById('comparisonGrid');
    container.innerHTML = '';
    
    lion.similar.forEach(similarId => {
        const similarLion = lionDatabase.find(l => l.id === similarId);
        if (similarLion) {
            const item = document.createElement('div');
            item.className = 'comparison-item';
            item.innerHTML = `
                <div class="comparison-img">${generateLionSVG(similarLion, 80)}</div>
                <div class="comparison-name">${similarLion.name}</div>
                <div class="comparison-era">${similarLion.dynastyName}</div>
            `;
            item.addEventListener('click', () => openDetail(similarLion));
            container.appendChild(item);
        }
    });
    
    const currentItem = document.createElement('div');
    currentItem.className = 'comparison-item current';
    currentItem.innerHTML = `
        <div class="comparison-img">${generateLionSVG(lion, 80)}</div>
        <div class="comparison-name">${lion.name}</div>
        <div class="comparison-era">当前查看</div>
    `;
    container.appendChild(currentItem);
}

// 关闭详情
function closeDetail() {
    const overlay = document.getElementById('detailOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    highlightedLion = null;
}

// ============================================
// 时间滑动条 · 时间滤镜功能
// ============================================

// 朝代顺序映射
const dynastyOrder = ['jin', 'yuan', 'ming', 'qing'];
const dynastyLabels = ['金代', '元代', '明代', '清代'];

// 初始化时间滑动条
function initTimeSlider() {
    const slider = document.getElementById('timeSlider');
    const thumb = document.getElementById('sliderThumb');
    const progress = document.getElementById('timeSliderProgress');
    const sliderLabel = document.getElementById('sliderLabel');
    
    if (!slider) return;
    
    // 滑动事件处理
    slider.addEventListener('input', function(e) {
        const value = parseFloat(e.target.value);
        updateTimeFilter(value);
    });
    
    // 初始化演化对比图
    initEvolutionComparison();
    
    // 点击标签跳转
    document.querySelectorAll('.slider-label').forEach((label, index) => {
        label.addEventListener('click', () => {
            slider.value = index;
            updateTimeFilter(index);
        });
    });
}

// 更新时间滤镜状态
function updateTimeFilter(value) {
    const slider = document.getElementById('timeSlider');
    const thumb = document.getElementById('sliderThumb');
    const progress = document.getElementById('timeSliderProgress');
    const sliderLabel = document.getElementById('sliderLabel');
    
    if (!slider) return;
    
    // 计算位置百分比
    const percentage = (value / 3) * 100;
    
    // 更新进度条
    progress.style.width = `${percentage}%`;
    
    // 更新滑块位置
    thumb.style.left = `${percentage}%`;
    
    // 更新标签
    const dynastyIndex = Math.round(value);
    sliderLabel.textContent = dynastyLabels[dynastyIndex];
    
    // 更新标签高亮
    document.querySelectorAll('.slider-label').forEach((label, index) => {
        label.classList.toggle('active', index === dynastyIndex);
    });
    
    // 更新演化对比卡片状态
    updateEvolutionCards(value);
    
    // 更新特征高亮区
    updateFeatureHighlight(dynastyIndex);
    
    // 触发自定义事件供其他模块使用
    window.dispatchEvent(new CustomEvent('timeFilterChange', {
        detail: {
            value: value,
            dynasty: dynastyOrder[dynastyIndex],
            dynastyIndex: dynastyIndex
        }
    }));
}

// 更新演化对比卡片
function updateEvolutionCards(value) {
    const cards = document.querySelectorAll('.evo-lion-card');
    const dynastyIndex = Math.round(value);
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'dimmed');
        
        if (index === dynastyIndex) {
            card.classList.add('active');
        } else if (index === dynastyIndex - 1 || index === dynastyIndex + 1) {
            // 相邻卡片保持可见但稍暗
            card.classList.remove('dimmed');
        } else {
            card.classList.add('dimmed');
        }
    });
    
    // 更新箭头动画
    document.querySelectorAll('.evo-arrow').forEach((arrow, index) => {
        if (index === dynastyIndex - 1) {
            arrow.style.opacity = '1';
            arrow.style.transform = 'translateX(5px)';
        } else {
            arrow.style.opacity = '0.3';
            arrow.style.transform = 'translateX(0)';
        }
    });
}

// 更新特征高亮区
function updateFeatureHighlight(dynastyIndex) {
    const cards = document.querySelectorAll('.highlight-card');
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'dimmed');
        
        if (index === dynastyIndex) {
            card.classList.add('active');
        } else {
            card.classList.add('dimmed');
        }
    });
}

// 初始化演化对比图
function initEvolutionComparison() {
    // 生成四个朝代的简化SVG
    const evoConfigs = [
        { id: 'evoJin', dynasty: 'jin', style: '古拙雄健', color: '#8B0000' },
        { id: 'evoYuan', dynasty: 'yuan', style: '渐趋柔美', color: '#2E8B57' },
        { id: 'evoMing', dynasty: 'ming', style: '精美繁复', color: '#191970' },
        { id: 'evoQing', dynasty: 'qing', style: '威武华丽', color: '#8B4513' }
    ];
    
    evoConfigs.forEach(config => {
        const container = document.getElementById(config.id);
        if (container) {
            container.innerHTML = generateMiniLionSVG(config.dynasty, config.color);
        }
    });
}

// 生成简化版石狮SVG（用于演化对比）
function generateMiniLionSVG(dynasty, color) {
    const svgConfigs = {
        jin: {
            head: 'circle',
            mane: 'spiral',
            body: 'square',
            tail: 'short'
        },
        yuan: {
            head: 'oval',
            mane: 'wave',
            body: 'curved',
            tail: 'curved'
        },
        ming: {
            head: 'rounded',
            mane: 'layered',
            body: 'graceful',
            tail: 'flowing'
        },
        qing: {
            head: 'ornate',
            mane: 'radiant',
            body: 'full',
            tail: 'ornate'
        }
    };
    
    const config = svgConfigs[dynasty] || svgConfigs.jin;
    
    return `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- 底座 -->
            <rect x="20" y="85" width="60" height="8" fill="#8b8680" rx="2"/>
            
            <!-- 身体 -->
            <path d="M35 85 Q30 60 35 45 Q40 35 50 35 Q60 35 65 45 Q70 60 65 85 Z" 
                  fill="${color}" opacity="0.9"/>
            
            <!-- 头部 -->
            <circle cx="50" cy="28" r="15" fill="${color}"/>
            
            <!-- 鬃毛 (根据朝代变化) -->
            ${generateManeSVG(dynasty, color)}
            
            <!-- 眼睛 -->
            <circle cx="45" cy="26" r="2" fill="#1a1a1a"/>
            <circle cx="55" cy="26" r="2" fill="#1a1a1a"/>
            
            <!-- 鼻子 -->
            <ellipse cx="50" cy="32" rx="3" ry="2" fill="#1a1a1a"/>
        </svg>
    `;
}

// 生成鬃毛SVG
function generateManeSVG(dynasty, color) {
    switch(dynasty) {
        case 'jin':
            return `
                <circle cx="50" cy="28" r="18" fill="none" stroke="${color}" stroke-width="3" opacity="0.6"/>
                <path d="M35 28 Q40 22 50 20 Q60 22 65 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <path d="M33 28 Q38 32 50 33 Q62 32 67 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
            `;
        case 'yuan':
            return `
                <path d="M32 28 Q35 15 50 12 Q65 15 68 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.7"/>
                <path d="M32 28 Q38 20 50 18 Q62 20 68 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <path d="M30 30 Q40 35 50 33 Q60 35 70 30" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
            `;
        case 'ming':
            return `
                <path d="M30 28 Q35 12 50 8 Q65 12 70 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.7"/>
                <path d="M30 28 Q38 15 50 12 Q62 15 70 28" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
                <path d="M30 28 Q40 20 50 16 Q60 20 70 28" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
                <!-- 璎珞装饰 -->
                <circle cx="50" cy="45" r="4" fill="${color}" opacity="0.8"/>
                <path d="M45 45 Q50 55 55 45" fill="none" stroke="${color}" stroke-width="1" opacity="0.6"/>
            `;
        case 'qing':
            return `
                <path d="M25 28 Q35 5 50 0 Q65 5 75 28" fill="none" stroke="${color}" stroke-width="3" opacity="0.7"/>
                <path d="M28 28 Q38 10 50 5 Q62 10 72 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <path d="M30 28 Q40 15 50 10 Q60 15 70 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <path d="M32 28 Q42 20 50 15 Q58 20 68 28" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <!-- 满布纹饰 -->
                <circle cx="50" cy="55" r="5" fill="${color}" opacity="0.8"/>
                <circle cx="40" cy="50" r="3" fill="${color}" opacity="0.6"/>
                <circle cx="60" cy="50" r="3" fill="${color}" opacity="0.6"/>
            `;
        default:
            return '';
    }
}

// ============================================
// 工具函数
// ============================================

function getDynastyName(dynasty) {
    return styleConfig.dynasties[dynasty]?.name || dynasty;
}

function getPoseDescription(pose) {
    return styleConfig.poses[pose] || pose;
}

// 导出
window.LugouGallery = {
    lionDatabase,
    styleConfig,
    generateLionSVG,
    generateLionCloseup,
    openDetail,
    closeDetail,
    prevLion,
    nextLion
};
