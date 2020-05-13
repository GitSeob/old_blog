import produce from 'immer';

export const initialState = {
	isLoaded: false,
	data: {},
}

const dummy = {
		about: {
		title: 'About Myself',
		subTitle: 'HELLO',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nInteger scelerisque mattis aliquam.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur in felis vitae justo pulvinar varius sed in nisl.\nCurabitur porttitor pretium rhoncus. Nunc vitae lacus a purus mollis laoreet in eget massa. Sed vel tristique lectus. Praesent sit amet sollicitudin urna.\nNunc dolor mi, vehicula non pellentesque id, sagittis non lectus. Quisque finibus dolor dolor, vitae interdum justo pharetra in. Etiam gravida sem vel turpis convallis cursus id nec eros. Pellentesque efficitur tristique lacus.\nMorbi a justo eleifend, imperdiet risus a, sodales leo. Maecenas fringilla quam vitae nunc sollicitudin, a pharetra tortor vulputate. Nam lobortis in lorem at scelerisque. Vestibulum ut velit non sem aliquam mollis accumsan ac justo.',
	},
	abilities: [{
		id: 0,
		title: '개잘생김',
		list: [
			'눈', '코', '입', '전부다',
		]
	},{
		id: 1,
		title: '노래잘부름',
		list: [
			'2018년 화양리 지그재그 신년회 노래자랑 1등', '2017년 화양리 지그재그 신년회 노래자랑 1등',
		]
	}],
	work : [{
		id: 1,
		imgPath: './images/test_mac.png',
		title: 'SEMO:세모',
		infomation: '대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>\n국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>\n군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.',
		content: [
			'국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
			'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
			'모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.',
			'군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
		],
	},{
		id: 2,
		imgPath: './images/test_mac.png',
		title: 'SEMO:세모',
		infomation: '대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>\n국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>\n군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.',
		content: [
			'국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
			'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
			'모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.',
			'군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
		],
	},{
		id: 3,
		imgPath: './images/test_mac.png',
		title: 'SEMO:세모',
		infomation: '대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>\n국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>\n군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.',
		content: [
			'국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
			'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
			'모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.',
			'군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
		],
	},{
		id: 4,
		imgPath: './images/test_mac.png',
		title: 'SEMO:세모',
		infomation: '대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>\n국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>\n군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.',
		content: [
			'국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
			'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
			'모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.',
			'군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
		],
	},{
		id: 5,
		imgPath: './images/test_mac.png',
		title: 'SEMO:세모',
		infomation: '대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다.<br/><br/>\n국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다.<br/><br/>\n군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.',
		content: [
			'국가는 여자의 복지와 권익의 향상을 위하여 노력하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.',
			'대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.',
			'모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.',
			'군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다.',
		],
	},]
};

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const LOAD_DATA_SUCCUESS = 'LOAD_DATA_SUCCUESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';


// ###########################################################################################
// ###########################################################################################
// ###########################################################################################
// ###########################################################################################

const portfolio = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DATA_REQUEST: {
			return {
				...state,
				data: {},
			}
		}
		case LOAD_DATA_SUCCUESS: {
			return {
				...state,
				data: dummy,
				isLoaded: true,
			}
		}
		case LOAD_DATA_FAILURE: {
			return {
				...state,
				isLoaded: true,
			}
		}
	}
}

export default portfolio;
