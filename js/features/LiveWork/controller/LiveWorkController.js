
class LiveWorkController {
	/*@ngInject*/
	constructor($scope, $rootScope, $sce, $http, LiveWorkService, $location,$window) {
		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$http = $http;
		this.$sce = $sce;
		this.LiveWorkService = LiveWorkService;
		this.$location = $location;
		this.$window = $window;
		this._init_();
		this._destroy_();
	}

	_init_() {
		this.$rootScope.title = '柠檬直播';
		this.isLoading = false;
		this.ref = this.$location.search()['ref'];
		this.infoNav = [
			'热门',
			'体式',
			'理疗',
			'流派',
			'零基础',
			'体验课',
			'工作坊',
			'专题课'
		];
		this.tag = '热门';
		this.busy = false;
		this.overIndex = 1;
		this.getWork('');
		this.liveWorksWait = [];
		this.liveWorksLive = [];
		this.liveWorksOver = [];
	}

	getWork(tag) {
		this.tag = tag;
		this.overIndex = 1;
		this.liveWorksWait = [];
		this.liveWorksLive = [];
		this.liveWorksOver = [];
		this.isLoading = true;
		Promise.all(
			[this.LiveWorkService.getData(encodeURIComponent(tag), 0),
				this.LiveWorkService.getData(encodeURIComponent(tag), 1),
				this.LiveWorkService.getData(encodeURIComponent(tag), 2, this.overIndex)])
			.then(values => {
				this.liveWorksWait = values[0];
				this.liveWorksLive = values[1];
				this.liveWorksOver = values[2];
				if (!this.liveWorksSwiper) {
					this.LiveWorkService.getBanner().then(data => {
						this.liveWorksSwiper = data.swiper;
					})
				}
				this.isLoading = false;
				this.$scope.$evalAsync();
			});
	}

	nextPage() {
		if (this.busy) return;
		this.busy = true;
		this.overIndex++;
		this.isLoading = true;
		this.LiveWorkService.getData(encodeURIComponent(this.tag), 2, this.overIndex).then((values) => {
			values.forEach(item=>{
				this.liveWorksOver.push(item);
			});
			this.busy = false;
			this.isLoading = false;
		});

		this.$scope.$evalAsync();


	}

	showTab(a) {
		this.tab = a;
	}

	_destroy_() {
		this.$scope.$on('$destroy', function () {
		});
	}
}

export default LiveWorkController;
