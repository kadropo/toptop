var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(d){function f(a){this._loopingOn=a.loopingOn;this._randomPlay=a.randomPlay;this._playlistItems;this._lastInOrder=!1;this._counter=-1;this._lastPlayedFromPlaylistClick;this._lastRandomCounter;this._traceCounter=this._randomPaused=!1;this._randomArr=[];this._playlistSelect=!1}d.playlistManager=function(a){return new f(a)};f.prototype={setCounter:function(a,b){"undefined"==typeof b&&(b=!0);this._counter=b?this._counter+parseInt(a,10):parseInt(a,10);this._checkCounter()},getCounter:function(){return this._randomPlay? this._playlistSelect?this._counter:this._randomArr[this._counter]:this._counter},advanceHandler:function(a){this._playlistSelect=!1;this._randomPaused?this._handleRandomPaused(a):this.setCounter(a)},processPlaylistRequest:function(a){this._playlistSelect=!1;this._randomPlay&&(this._playlistSelect=!0,this._lastPlayedFromPlaylistClick=a,this._randomPaused||(this._lastRandomCounter=this._counter,this._randomPaused=!0));this.setCounter(a,!1)},getLastInOrder:function(){return this._lastInOrder},getRandomPaused:function(){return this._randomPaused}, setPlaylistItems:function(a){this._counter=-1;this._playlistItems=a;this._randomPlay&&this._makeRandomList()},reSetCounter:function(){this._counter=-1},setRandom:function(a){(this._randomPlay=a)&&this._makeRandomList();this._randomChange()},setLooping:function(a){this._loopingOn=a},setTraceCounter:function(a){this._traceCounter=a},_handleRandomPaused:function(a){var b=d(this);this._randomPaused=!1;this._lastRandomCounter+a>this._playlistItems-1?(this._counter=this._playlistItems-1,b.trigger("ap_PlaylistManager.COUNTER_READY")): 0>this._lastRandomCounter+a?(this._counter=0,b.trigger("ap_PlaylistManager.COUNTER_READY")):this.setCounter(this._lastRandomCounter+a,!1)},_randomChange:function(){this._randomPlay?(this._activeIndexFirst(),this._counter=0):this._randomPaused?(this._counter=this._lastPlayedFromPlaylistClick,this._randomPaused=!1):this._counter=this._randomArr[this._counter]},_checkCounter:function(){if(isNaN(this._counter))alert("ap_PlaylistManager, counter = ",this._counter);else{var a=d(this);this._lastInOrder= !1;this._loopingOn?(this._randomPlay?this._counter>this._playlistItems-1?(this._counter=this._randomArr[this._playlistItems-1],this._makeRandomList(),this._firstIndexCheck(),this._counter=0):0>this._counter&&(this._counter=this._randomArr[0],this._makeRandomList(),this._lastIndexCheck(),this._counter=this._playlistItems-1):this._counter>this._playlistItems-1?this._counter=0:0>this._counter&&(this._counter=this._playlistItems-1),a.trigger("ap_PlaylistManager.COUNTER_READY")):(this._counter>this._playlistItems- 1?(this._counter=this._playlistItems-1,this._lastInOrder=!0):0>this._counter&&(this._counter=0),this._lastInOrder?a.trigger("ap_PlaylistManager.PLAYLIST_END"):a.trigger("ap_PlaylistManager.COUNTER_READY"));this._traceCounter&&console.log("counter = "+this.getCounter())}},_makeRandomList:function(){3>this._playlistItems||(this._randomArr=this._randomiseIndex(this._playlistItems))},_firstIndexCheck:function(){if(this._randomArr[0]==this._counter){var a=this._randomArr.splice(0,1);this._randomArr.push(a)}}, _lastIndexCheck:function(){if(this._randomArr[this._playlistItems-1]==this._counter){var a=this._randomArr.splice(this._playlistItems-1,1);this._randomArr.unshift(a)}},_activeIndexFirst:function(){var a=0,b=this._randomArr.length;for(a;a<b;a++)if(this._randomArr[a]==this._counter){if(0==a)break;a=this._randomArr.splice(a,1);this._randomArr.unshift(parseInt(a,10));break}},_randomiseIndex:function(a){var b=[],d=[],c=0;for(c;c<a;c++)b[c]=c;var c=0,e;for(c;c<a;c++)e=Math.round(Math.random()*(b.length- 1)),d[c]=b[e],b.splice(e,1);return d}}})(jQuery);

}
/*
     FILE ARCHIVED ON 17:09:32 Apr 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:03:46 Sep 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 141.229
  exclusion.robots: 0.149
  exclusion.robots.policy: 0.138
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 115.255 (3)
  PetaboxLoader3.datanode: 169.821 (5)
  load_resource: 169.694 (2)
  PetaboxLoader3.resolve: 107.078 (2)
*/
