const repository = {
	'alerts': function (args) {
		const  rewardType = args[1];
		return `Alert info stub for ${rewardType} resourse`;
	},

	'invasions': function (args) {
		const rewardType = args[1];
		return `Invasion info stub for ${rewardType} resourse`;
	},

	'cetus': function() {
		return 'Cetus cycle stub. Current time: high noon.';
	}
};

module.exports = repository;