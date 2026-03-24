CREATE DATABASE IF NOT EXISTS bridge_rhyme;
USE bridge_rhyme;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bridges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL COMMENT '桥梁名称',
    name_en VARCHAR(100) COMMENT '英文名称',
    location VARCHAR(200) COMMENT '地理位置',
    province VARCHAR(50) COMMENT '省份',
    city VARCHAR(50) COMMENT '城市',
    description TEXT COMMENT '桥梁描述',
    history TEXT COMMENT '历史背景',
    construction_year INT COMMENT '建造年份',
    length DECIMAL(10,2) COMMENT '长度(米)',
    width DECIMAL(10,2) COMMENT '宽度(米)',
    span DECIMAL(10,2) COMMENT '主跨跨度(米)',
    bridge_type VARCHAR(50) COMMENT '桥梁类型',
    latitude DECIMAL(10,6) COMMENT '纬度',
    longitude DECIMAL(10,6) COMMENT '经度',
    image_url VARCHAR(500) COMMENT '图片URL',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bridges (name, name_en, location, province, city, description, history, construction_year, length, width, span, bridge_type, latitude, longitude) VALUES
('赵州桥', 'Zhaozhou Bridge', '河北省石家庄市赵县', '河北省', '石家庄市', '世界上现存最早、保存最好的敞肩式石拱桥', '建于隋朝大业年间(605-618年)，由李春设计建造', 605, 50.82, 9.6, 37.4, '石拱桥', 37.7697, 114.7764),
('卢沟桥', 'Lugou Bridge', '北京市丰台区', '北京市', '北京市', '北京市现存最古老的石造联拱桥', '始建于金大定二十九年(1189年)，明正统九年(1444年)重修', 1189, 266.5, 9.3, 21.5, '石拱桥', 39.8517, 116.2233),
('南京长江大桥', 'Nanjing Yangtze River Bridge', '江苏省南京市', '江苏省', '南京市', '中国自行设计建造的第一座双层式铁路、公路两用桥梁', '1968年建成通车，是20世纪60年代中国经济建设的重要成就', 1968, 4589, 19.5, 160, '钢梁桥', 32.0146, 118.7391),
('港珠澳大桥', 'Hong Kong-Zhuhai-Macao Bridge', '广东省珠海市', '广东省', '珠海市', '世界上最长的跨海大桥', '2009年动工，2018年正式通车，总长55公里', 2018, 55000, 33.1, 458, '斜拉桥', 22.2855, 113.5767),
('杭州湾跨海大桥', 'Hangzhou Bay Bridge', '浙江省嘉兴市', '浙江省', '嘉兴市', '世界第三长跨海大桥', '2008年建成通车，连接嘉兴与宁波', 2008, 36000, 33, 80, '斜拉桥', 30.5167, 121.0833),
('泸定桥', 'Luding Bridge', '四川省甘孜藏族自治州泸定县', '四川省', '甘孜藏族自治州', '中国著名的红色桥梁，红军长征飞夺泸定桥', '始建于清康熙四十四年(1705年)', 1705, 103, 2.8, 100, '铁索桥', 29.9152, 102.2493),
('五亭桥', 'Wuting Bridge', '江苏省扬州市瘦西湖', '江苏省', '扬州市', '中国最美的桥梁之一，仿北京北海五龙亭', '建于清乾隆二十二年(1757年)', 1757, 57, 6.6, 7, '石拱桥', 32.4217, 119.4283),
('程阳永济桥', 'Yongji Bridge', '广西壮族自治区柳州市三江侗族自治县', '广西壮族自治区', '柳州市', '中国保存最完好、规模最大的侗族风雨桥', '建于民国九年(1920年)', 1920, 64.4, 3.4, 20, '侗族风雨桥', 25.9333, 109.6),
('武汉长江大桥', 'Wuhan Yangtze River Bridge', '湖北省武汉市', '湖北省', '武汉市', '万里长江第一桥', '1957年建成通车', 1957, 1670, 22.5, 128, '钢梁桥', 30.5456, 114.2693),
('重庆千厮门嘉陵江大桥', 'Qiansimen Bridge', '重庆市渝中区', '重庆市', '重庆市', '重庆嘉陵江上的著名桥梁', '2015年建成', 2015, 720, 26, 240, '斜拉桥', 29.5536, 106.5872),
('颐和园十七孔桥', 'Seventeen-Arch Bridge', '北京市海淀区颐和园', '北京市', '北京市', '颐和园中著名的石桥', '清乾隆年间建造', 1750, 150, 8, 8, '石拱桥', 39.9989, 116.2756),
('都江堰安澜桥', 'Anlan Bridge', '四川省成都市都江堰市', '四川省', '成都市', '都江堰景区著名索桥', '宋代的索桥，清代修复', 970, 240, 2.4, 60, '竹索桥', 31.0022, 103.6122),
('晋江安平桥', 'Anping Bridge', '福建省泉州市晋江市', '福建省', '泉州市', '中国古代最长的石桥', '南宋绍兴八年(1138年)建造', 1138, 2070, 5, 10, '石板桥', 24.7822, 118.5486),
('肇庆星湖五龙桥', 'Wulong Bridge', '广东省肇庆市', '广东省', '肇庆市', '星湖景区著名石桥', '现代建造', 1980, 80, 8, 12, '石拱桥', 23.0667, 112.4667),
('广州海珠桥', 'Haizhu Bridge', '广东省广州市越秀区', '广东省', '广州市', '广州市中心跨越珠江的桥梁', '1933年建成，是广州第一座跨江桥', 1933, 356, 18.5, 56, '钢梁桥', 23.1123, 113.2589),
('上海外白渡桥', 'Waibaidu Bridge', '上海市黄浦区', '上海市', '上海市', '中国第一座全钢结构铆接桥梁', '1907年建成，是上海标志性建筑', 1907, 106.7, 18.4, 52, '钢梁桥', 31.2500, 121.4917);
