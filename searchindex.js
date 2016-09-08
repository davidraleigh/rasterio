Search.setIndex({envversion:48,filenames:["api/index","api/rasterio.compat","api/rasterio.coords","api/rasterio.crs","api/rasterio.drivers","api/rasterio.dtypes","api/rasterio.enums","api/rasterio.env","api/rasterio.errors","api/rasterio.features","api/rasterio.fill","api/rasterio.io","api/rasterio.mask","api/rasterio.merge","api/rasterio.plot","api/rasterio.profiles","api/rasterio.sample","api/rasterio.transform","api/rasterio.vfs","api/rasterio.warp","api/rasterio.windows","cli","contributing","index","installation","intro","python_manual","quickstart","switch","topics/calc","topics/color","topics/concurrency","topics/configuration","topics/errors","topics/features","topics/fillnodata","topics/georeferencing","topics/image_options","topics/image_processing","topics/index","topics/masking-by-shapefile","topics/masks","topics/migrating-to-v1","topics/overviews","topics/plotting","topics/profiles","topics/reading","topics/reproject","topics/resampling","topics/tags","topics/vsi","topics/windowed-rw","topics/writing"],objects:{"":{rasterio:[0,7,0,"-"]},"rasterio.coords":{BoundingBox:[2,9,1,""],disjoint_bounds:[2,8,1,""]},"rasterio.crs":{CRS:[3,9,1,""]},"rasterio.crs.CRS":{from_epsg:[3,10,1,""],from_string:[3,10,1,""],is_epsg_code:[3,11,1,""],is_valid:[3,11,1,""],to_dict:[3,12,1,""],to_string:[3,12,1,""]},"rasterio.drivers":{is_blacklisted:[4,8,1,""]},"rasterio.dtypes":{can_cast_dtype:[5,8,1,""],check_dtype:[5,8,1,""],get_minimum_dtype:[5,8,1,""],is_ndarray:[5,8,1,""],validate_dtype:[5,8,1,""]},"rasterio.enums":{ColorInterp:[6,9,1,""],Compression:[6,9,1,""],Interleaving:[6,9,1,""],MaskFlags:[6,9,1,""],PhotometricInterp:[6,9,1,""],Resampling:[6,9,1,""]},"rasterio.enums.ColorInterp":{Cb:[6,11,1,""],Cr:[6,11,1,""],Y:[6,11,1,""],alpha:[6,11,1,""],black:[6,11,1,""],blue:[6,11,1,""],cyan:[6,11,1,""],gray:[6,11,1,""],green:[6,11,1,""],grey:[6,11,1,""],hue:[6,11,1,""],lightness:[6,11,1,""],magenta:[6,11,1,""],palette:[6,11,1,""],red:[6,11,1,""],saturation:[6,11,1,""],undefined:[6,11,1,""],yellow:[6,11,1,""]},"rasterio.enums.Compression":{ccittfax3:[6,11,1,""],ccittfax4:[6,11,1,""],ccittrle:[6,11,1,""],deflate:[6,11,1,""],jpeg:[6,11,1,""],lzma:[6,11,1,""],lzw:[6,11,1,""],none:[6,11,1,""],packbits:[6,11,1,""]},"rasterio.enums.Interleaving":{band:[6,11,1,""],line:[6,11,1,""],pixel:[6,11,1,""]},"rasterio.enums.MaskFlags":{all_valid:[6,11,1,""],alpha:[6,11,1,""],nodata:[6,11,1,""],per_dataset:[6,11,1,""]},"rasterio.enums.PhotometricInterp":{black:[6,11,1,""],cielab:[6,11,1,""],cmyk:[6,11,1,""],icclab:[6,11,1,""],itulab:[6,11,1,""],rgb:[6,11,1,""],white:[6,11,1,""],ycbcr:[6,11,1,""]},"rasterio.enums.Resampling":{average:[6,11,1,""],bilinear:[6,11,1,""],cubic:[6,11,1,""],cubic_spline:[6,11,1,""],gauss:[6,11,1,""],lanczos:[6,11,1,""],max:[6,11,1,""],med:[6,11,1,""],min:[6,11,1,""],mode:[6,11,1,""],nearest:[6,11,1,""],q1:[6,11,1,""],q3:[6,11,1,""]},"rasterio.env":{Env:[7,9,1,""],defenv:[7,8,1,""],delenv:[7,8,1,""],ensure_env:[7,8,1,""],getenv:[7,8,1,""],setenv:[7,8,1,""]},"rasterio.env.Env":{drivers:[7,12,1,""],get_aws_credentials:[7,12,1,""]},"rasterio.errors":{CRSError:[8,13,1,""],DriverRegistrationError:[8,13,1,""],EnvError:[8,13,1,""],FileOverwriteError:[8,13,1,""],NodataShadowWarning:[8,13,1,""],RasterioIOError:[8,13,1,""]},"rasterio.features":{bounds:[9,8,1,""],geometry_mask:[9,8,1,""],rasterize:[9,8,1,""],shapes:[9,8,1,""],sieve:[9,8,1,""]},"rasterio.fill":{fillnodata:[10,8,1,""]},"rasterio.io":{BufferedDatasetWriter:[11,9,1,""],DatasetReader:[11,9,1,""],DatasetWriter:[11,9,1,""],TransformMethodsMixin:[11,9,1,""],WindowMethodsMixin:[11,9,1,""],get_writer_for_driver:[11,8,1,""],get_writer_for_path:[11,8,1,""]},"rasterio.io.TransformMethodsMixin":{index:[11,12,1,""],ul:[11,12,1,""],xy:[11,12,1,""]},"rasterio.io.WindowMethodsMixin":{window:[11,12,1,""],window_bounds:[11,12,1,""],window_transform:[11,12,1,""]},"rasterio.mask":{mask:[12,8,1,""]},"rasterio.merge":{merge:[13,8,1,""]},"rasterio.plot":{get_plt:[14,8,1,""],plotting_extent:[14,8,1,""],reshape_as_image:[14,8,1,""],reshape_as_raster:[14,8,1,""],show:[14,8,1,""],show_hist:[14,8,1,""]},"rasterio.profiles":{DefaultGTiffProfile:[15,9,1,""],Profile:[15,9,1,""]},"rasterio.profiles.DefaultGTiffProfile":{defaults:[15,11,1,""]},"rasterio.profiles.Profile":{defaults:[15,11,1,""]},"rasterio.sample":{sample_gen:[16,8,1,""]},"rasterio.transform":{array_bounds:[17,8,1,""],from_bounds:[17,8,1,""],from_origin:[17,8,1,""],guard_transform:[17,8,1,""],rowcol:[17,8,1,""],tastes_like_gdal:[17,8,1,""],xy:[17,8,1,""]},"rasterio.vfs":{parse_path:[18,8,1,""],vsi_path:[18,8,1,""]},"rasterio.warp":{calculate_default_transform:[19,8,1,""],reproject:[19,8,1,""],transform:[19,8,1,""],transform_bounds:[19,8,1,""],transform_geom:[19,8,1,""]},"rasterio.windows":{bounds:[20,8,1,""],crop:[20,8,1,""],evaluate:[20,8,1,""],from_bounds:[20,8,1,""],get_data_window:[20,8,1,""],intersect:[20,8,1,""],intersection:[20,8,1,""],iter_args:[20,8,1,""],shape:[20,8,1,""],transform:[20,8,1,""],union:[20,8,1,""],window_index:[20,8,1,""]},rasterio:{band:[0,8,1,""],compat:[1,7,0,"-"],coords:[2,7,0,"-"],copy:[0,8,1,""],crs:[3,7,0,"-"],drivers:[4,7,0,"-"],dtypes:[5,7,0,"-"],enums:[6,7,0,"-"],env:[7,7,0,"-"],errors:[8,7,0,"-"],features:[9,7,0,"-"],fill:[10,7,0,"-"],io:[11,7,0,"-"],mask:[12,7,0,"-"],merge:[13,7,0,"-"],open:[0,8,1,""],pad:[0,8,1,""],plot:[14,7,0,"-"],profiles:[15,7,0,"-"],sample:[16,7,0,"-"],transform:[17,7,0,"-"],vfs:[18,7,0,"-"],warp:[19,7,0,"-"],windows:[20,7,0,"-"]}},objnames:{"0":["np","module","Python module"],"1":["np","function","Python function"],"10":["py","staticmethod","Python static method"],"11":["py","attribute","Python attribute"],"12":["py","method","Python method"],"13":["py","exception","Python exception"],"2":["np","class","Python class"],"3":["np","staticmethod","Python static method"],"4":["np","attribute","Python attribute"],"5":["np","method","Python method"],"6":["np","exception","Python exception"],"7":["py","module","Python module"],"8":["py","function","Python function"],"9":["py","class","Python class"]},objtypes:{"0":"np:module","1":"np:function","10":"py:staticmethod","11":"py:attribute","12":"py:method","13":"py:exception","2":"np:class","3":"np:staticmethod","4":"np:attribute","5":"np:method","6":"np:exception","7":"py:module","8":"py:function","9":"py:class"},terms:{"0m0":31,"0m1":31,"0m3":31,"12n":27,"13547682814_f2e459f7a5_o_d":34,"18n":36,"3x3":10,"4th":41,"512mb":[7,28],"\u0434\u0440\u0443\u0433\u0430\u044f":49,"\u0441\u0442\u0440\u043e\u043a\u0430":49,"__main__":31,"__name__":31,"_cr":3,"_exampl":31,"_io":11,"_subplot":44,"abstract":[7,25,28,41],"boolean":[2,5,9,11,20,37,41],"break":[5,51],"byte":[21,29,30,31,36,38,40,41,42,43,44,46,47,49,50,51],"case":[0,7,21,22,27,29,31,32,34,40,41,43,47,48],"char":31,"class":[2,3,6,7,11,15,25,28,36,47,49],"default":[7,9,10,11,12,14,15,17,19,21,24,28,30,31,32,34,37,41,48,49],"enum":[],"export":21,"final":[22,32,41,52],"float":[3,5,9,10,11,12,13,17,19,20,27],"function":[],"import":[0,5,14,22,23,24,27,28,30,31,34,36,37,38,40,41,42,43,44,46,47,48,49,51],"int":[0,3,9,11,12,14,17,19,20,31,43],"long":[22,40],"new":[0,13,21,22,27,28,30,34,36,40,41,47,48,49,52],"null":0,"return":[0,2,3,4,5,7,9,10,11,12,13,14,17,18,19,20,27,28,30,31,32,37,41,42,46,47,51],"short":22,"static":[3,28],"switch":[22,42],"true":[0,2,3,4,5,9,12,14,15,17,19,20,21,28,30,32,34,37,40,41,44,49,50,51],"try":[22,32,46],"var":28,"while":[22,25,37,38,41,50],abil:[21,41],about:[21,22,23,25,31],abov:[21,22,25,27,28,30,31,32,41,42,48,50,51],absent:19,absolut:0,accept:[0,28,37,42],access:[],accompani:22,accomplish:44,accordingli:48,account:[19,47],achiev:22,across:[14,31,51],activ:22,actual:21,adapt:24,add:[19,21,22,24,28,42,43,49],add_argu:31,addit:[],addition:[0,28],address:24,adher:22,adjac:[9,41],adjust:[0,48],advanc:[],advis:25,aerial:10,aff:48,affect:[22,32],affin:[],afford:31,afin:28,after:[12,19,22,32,42,46,50],again:[32,34,41],against:3,aid:22,algorithm:[6,9,10,12,13,21,34,48],alia:27,all:[0,3,7,9,10,12,13,19,20,21,22,25,27,28,29,30,34,40,41,42,46,47,48,50,51,52],all_proj_kei:3,all_touch:[9,12,34],all_valid:6,allow:[3,11,20,21,41,42,43,44,51],almost:[28,31],alogrithm:43,along:[19,27,47],alongsid:41,alpha:[6,8,41,44],also:[10,21,22,24,27,28,29,31,36,37,40,43,44,47,48,51,52],alter:[32,37,41,43],altern:21,although:42,alwai:[21,22],amazonaw:28,amelior:[],among:25,amount:9,anaconda:[],analog:47,analyst:27,anchor:19,ani:[3,7,12,19,21,22,25,27,28,29,32,41,44,47,51],announc:42,anomali:27,anonym:21,anoth:[12,13,21,29,30,48,49],antimeridian:19,antimeridian_cut:19,antimeridian_offset:19,apach:[0,18,28],appear:41,append:52,appli:[10,12,22,27,28,31,40,41,52],applic:[21,27,28],approach:[7,28],appropri:[9,11,19,21,31,34,41,48],approxim:[21,28],apt:[22,24],arc:21,architectur:21,archiv:[18,28],area:[],area_or_point:49,aren:49,arg:[3,20,21,29,31],argpars:31,argument:[0,7,14,19,20,21,27,28,29,32,36,37,41,42,44,45,47,49],argumentpars:31,aris:25,arithemt:29,aros:[],around:[28,51],arr:[14,20,31,48,51],arrai:[],array_bound:17,array_equ:[],array_lik:19,artifact:[10,41],as_complet:31,asarrai:[21,29],aspir:22,assert:[30,47,49,51],associ:[9,47,48],assum:[19,21,28,42],assumpt:[28,51],asterio:[],astyp:[41,52],attach:30,attempt:52,attribut:[],author:36,automat:[21,49],auxillari:41,avail:[6,9,19,21,22,24,28,37,43,48,51],averag:[6,10,19,43,48],avoid:[25,28,37,43],aws_access_key_id:7,aws_secret_access_kei:7,aws_sess:7,aws_session_token:7,ax1:44,axb:44,axes_api:14,axesimag:[44,46],axessubplot:44,axg:44,axhist:44,axi:[14,27,36,38,48],axr:44,axrgb:44,back:[28,41],background:[],bad:25,band1:[27,28,42],band:[],band_index:44,band_on:27,bare:3,base:[2,3,6,7,8,9,11,15,21,22,23,24,30,31,41,47],basic:[27,51,52],bbox:9,becaus:[22,27,28],been:[27,28,41,42],befor:[7,22,24,25,28,32,50],before_instal:[],begin:[0,27,41,51],behavior:[32,37,46],belong:49,below:[0,21,22,24,27,28,30,31,36,41,47,49,51],besid:[],best:[0,52],better:[21,22,32,42,48],between:[],beyond:[21,28],bidx:[0,9,14,21],biggest:42,bilinear:[6,19,48],bin:[14,22,24,44],bind:[],bit:[0,9,15,27,29,30,41,52],black:[6,34],blacklist:4,blank:51,block:[],block_shap:51,block_window:[31,51],blockxsiz:[15,21,31,37,50],blockys:[15,21,31,37,50],blue:[6,14,28,34,41,44],boilerpl:32,book:22,bool:[9,12,14,19,41],bool_:9,both:[22,24,28,42],boto3:[7,50],bottom:[2,11,13,14,19,20,21,27],boundari:[12,21,51],boundingbox:[2,21,27],boundless:[11,20],bounds1:2,bounds2:2,box:[2,9,21,27,40],branch:22,bread:27,bred:51,bresenham:[9,12,21,34],brew:[22,24],briefli:[],broadcast:0,browser:27,bsd:22,buffer:11,buffereddatasetwrit:11,buffereddatasetwriterbas:11,bug:22,buggi:41,build:[],build_ext:24,build_overview:43,built:[11,17,22,45,46],builtin:[21,29],bullet:41,burn:[],busi:25,butter:27,cach:[7,28],calcul:[11,19,21,47],calculate_default_transform:[19,47],call:[7,11,22,27,28,30,31,32,46,49,51],came:49,can:[0,3,4,5,9,11,14,17,21,22,24,27,28,29,30,31,32,34,37,38,40,41,43,44,46,47,48,49,50,51,52],can_cast_dtyp:5,cannot:[8,24,30],canon:[],capabl:[11,52],care:41,carefulli:48,cartesian:2,cast:[5,9,19],cat:21,categori:28,caus:[22,25],ccittfax3:6,ccittfax4:6,ccittrl:6,cdef:31,ceil:[11,17],cell:48,cellsiz:48,center:[9,11,12,17,21,27,34,40,47],central:[22,27],central_meridian:36,certain:48,certainli:41,challeng:22,chang:[],channel:[41,44],check:[3,5,25,48],check_dtyp:5,choos:28,chosen:25,christoph:24,chunk:[46,51],cielab:6,cimport:31,claim:22,clean:26,cleaner:32,clear:32,cli:[],click:[8,21,24],cligj:24,clobber:8,clone:[21,22],close:[11,22,27,41,43,46,49],closur:[],cmap:[30,44,46],cmyk:6,code:[],code_of_conduct:22,coeffici:[0,17],coincid:41,col:[0,11,17,27,47],col_start:[11,20,28,51],col_stop:[11,20,28,51],collect:[9,15,21,28,29,49],colorado:27,colorinterp:[6,14,30],column:[0,11,14,17,20,21,27,28,36,38,41,46,51],com:[22,28,36,47],combin:21,come:37,comma:21,command:[],commenc:7,common:[0,14,21,37,44,47],commonli:43,compar:[2,27,28,31,50],compat:[],compil:[22,24],complement:28,complet:[4,28,31,37,42],complex:[9,47],compliant:[],complic:[28,29,52],compon:41,compos:51,comprehens:27,compress:[6,15,21,37,50,52],comput:[14,27,31,43,51],concept:[],concern:[25,50],conda:24,condit:25,config:24,configopt:32,confirm:43,conflict:28,conform:41,conic:10,conjunct:[29,41],connect:9,consequ:28,consequenti:25,consid:[27,28,34,41],consider:25,consist:27,consolid:22,constant:[],construct:[21,41,42],constructor:[3,7],consult:50,consum:9,contain:[0,3,10,11,12,17,19,20,22,27,40,41,42,51],contend:28,context:[7,20,21,27,28,32,33,37,41,46,52],continu:[10,48],contour:[14,27,44],contour_label_kw:14,contract:25,contributor:[],control:[0,28,43],conveni:21,convinc:[],coord:[],coordin:[],copi:[],copyright:25,core:[31,32],corner:[0,11,17,27,28,41,46,51],correct:[47,48],correspond:[11,20,34,36,41],could:[21,32,42],count:[0,21,27,34,36,41,47,49,50,51,52],counterpart:22,cov:22,cover:[9,19,20,21,27,34,47],coverag:22,cp27:24,cpl_debug:[28,32],cpu:31,cpu_count:31,crack:10,crasher:25,creat:[],creation:[],creator:41,credenti:[7,50],criteria:41,crop:[12,20,21,40,51],cross:[],crs84:23,crserror:8,cubic:[6,19,43,48],cubic_splin:[6,19],curl:[],current:[7,14,21,22,32,48,52],custom:[22,32],cut:19,cyan:6,cython:[22,24,31],damag:25,danger:[],dangl:[25,28],data:[],databas:3,dataset:[],dataset_mask:[23,28,41],datasetread:[0,11,14,46],datasetreaderbas:11,datasetupdat:0,datasetwrit:11,datasetwriterbas:11,datasourc:42,dateset:[],datum:[0,3,21,36],deactiv:22,debug:28,decid:[22,50],decim:[],declar:[15,41],decor:[7,20],decreas:[21,48],ded:[],def:31,default_valu:[9,21],defaultgtiffprofil:15,defenv:7,defin:[0,2,8,12,14,28,31,37,38,40,41,48,51],definit:[19,36],deflat:[6,50],degre:[19,27,36,47],del:[],deleg:[],delenv:7,delet:[7,37],demo:31,demonstr:[22,44,51],densifi:19,densifii:47,densify_pt:19,depend:[],deprec:[],deriv:[19,25,27],describ:[3,21,22,27,36,47,50,51],descript:[27,28,31],design:[],desir:[27,51],dest:[13,37,40,47],destin:[0,5,19,21,31,47,51],detail:[0,21,22,27,29,37,41,46,48],determin:[0,2,5,11,13,17,20,21,41,42,43,47],dev:[7,22,24],develop:[],diagnos:10,dict:[0,3,9,12,19,30,36],dictionari:[14,27],did:48,differ:[],difficult:27,digit:27,dimens:[19,20,21,38,47,52],dimension:[14,23,27,44,46],dimenson:46,dir:[],direct:[10,25,27,34,42],directli:[11,21,27,32,43,44,52],directori:[22,24,46],disabl:28,disclaim:25,discov:24,discuss:[42,46,52],disjoint:2,disjoint_bound:2,disk:[11,19,27,34,49,52],displai:[14,27,36,41,44],distanc:10,distribut:[],distro:22,divid:48,dll:[24,28],doc:[0,22,41,47],doctest:[41,44,46],document:[],doe:[19,25,26,28,29,42,46,48,50,52],doesn:28,don:[11,24,28,41,43,49],done:[10,21,22,28,29,36],doubl:[19,31,48],down:[21,41,47,51],download:[24,50],downsid:32,downward:36,dozen:7,driver:[],driverregistrationerror:8,dst:[0,21,27,28,30,31,34,36,43,47,49,51,52],dst_cr:[19,47,48],dst_nodata:19,dst_shape:47,dst_transform:[19,47,48],dstack:41,dtype:[],due:[9,48],dure:[10,41,42,44,48],dynam:[27,28,41,51],each:[9,10,12,19,21,27,28,37,41,42,44,47,51],earli:22,earlier:[34,41],earth:27,easi:4,easier:[28,32,47],easili:[14,22],east:[11,17,20,27,36],echo:21,edg:[10,19,47],ef244954b719dba97926:21,effect:[22,37,48,51],effici:[21,38,51],either:[9,20,21,41,42,51],element:[0,12,13,19,21,27,28,32,36,40,41,42],elev:10,elimin:22,ellp:[0,3,21],els:22,elsewher:[27,46],embrac:22,empir:41,emploi:22,empti:[14,48],enabl:[22,24],encapsul:[],encod:[3,21],encount:41,end:[7,21,22,52],endors:25,engin:29,ensur:[7,28,44,46],ensure_env:7,enter:[7,37],entir:[20,22,42,50],entri:[21,46],enum34:24,enumer:[6,47,51],env:[],enverror:8,environ:[],environm:[],eof:21,epsg:[3,19,21,23,27,28,36,47,50],epsilon:[11,17],equal:29,equat:[27,36],equirectangular:27,equival:[28,44,47],errno:46,error:[],especi:22,essenti:32,etc:[14,21,24],evalu:[9,20,21,29,41],even:[25,47,48],event:25,eventu:42,everi:[27,28,41],exactli:[9,30],exampl:[],example2:51,except:[8,28,32,33,42,46],exclud:9,excut:28,execut:[22,28,31,32,50],executor:31,exemplari:25,exist:[0,5,7,11,13,21,22,27,28,30,41,47,48,52],exit:[7,21,32,37,46,52],exp:27,expand:20,expect:[14,42,46],experi:[42,52],explain:[27,28,29,50],explic:32,explicit:32,explicitli:28,explictli:41,explor:[],expon:[21,43],exporttowkt:[],expos:[22,27,34],extend:[22,25,27,51],extens:[4,22,24,25,28],extent:[2,11,12,14,20,21,40,44,47,51],extern:[21,41,43],extra:[22,50],extract:[],factor:[29,43,47,48],factori:5,fail:24,failur:32,fairli:[10,24,31],fake:31,fall:20,fals:[2,9,11,12,14,19,20,27,37,41,44,46,48],false_east:36,false_north:36,far:[21,32],fast:25,faster:[31,42,43],favor:[37,42],featur:[],featurecollect:21,feedback:22,feel:51,fetch:50,few:[47,52],fewer:[25,50],fiction:27,field:[25,27],fig:44,figsiz:44,figur:[0,14,44],file:[],fileerror:8,filenam:[22,28],filenotfounderror:46,fileoverwriteerror:8,filesystem:0,fill:[],fill_valu:28,fillnodata:[10,29,35],filter:10,find:[10,24,32],fine:37,finish:27,fio:21,fiona:[9,21,40],first:[13,14,21,22,27,28,29,34,41,44,46,49,51],fit:25,fix:[27,41,48],fixtur:[],flag:19,flatten:21,flavor:37,float32:9,float64:9,floor:[11,17],flushcach:[],fly:43,focu:37,folder:24,follow:[11,19,21,22,24,25,27,32,36,38,41,44,46,47,51],foo:36,footprint:23,forc:22,foreground:34,foremost:28,forg:24,fork:22,form:[14,20,25,36,37],format:[0,4,7,8,11,14,19,24,30,32,37,43,46,52],formats_list:0,former:[29,42],forward:42,found:[9,41,48],four:[0,10,31],fraction:[11,17],free:22,freed:25,fresh:41,from:[],from_bound:[17,20],from_epsg:3,from_gdal:28,from_origin:[17,27],from_str:3,full:[14,20,42,43,51,52],fulli:28,fun:[],func:29,fundament:[27,42],further:42,futur:[22,24,31],future_to_window:31,g_arr2:[],g_arr:[],g_band1:[],g_band1_arr:[],g_d:[],ga_readonli:[],gauss:[6,43],gaussian:27,gdal111:24,gdal:[],gdal_cachemax:[7,28],gdal_tiff_internal_mask:[37,41],gdal_transl:[0,21],gdalconst:[],gdalcreat:52,gdalcreatecopi:52,gdalenv:[],gdalrasterio:[31,48],gdt_byte:[],gener:[],geo:[9,24,27,44],geogc:36,geograph:[0,3,23],geojson:[9,12,19,21,23,34],geojsonio:21,geom:[19,23],geometri:[9,19,21,34,40],geometric_transform:47,geometry_mask:9,georeferenc:[],geospati:[],geotiff:[],geotransform:[],get:[3,7,11,20,21,22,24,27,31,34,41,43,44,49,50],get_aws_credenti:7,get_data_window:[20,42,51],get_minimum_dtyp:5,get_plt:14,get_writer_for_driv:11,get_writer_for_path:11,getconfigopt:28,getdriverbynam:[],getenv:7,getprojectionref:[],getrasterband:[],gfortran:22,gil:31,github:[4,22,36],give:[22,25,43,51],given:[3,11,17,20,21,30,31,47],global:[22,32,36,37],gloss:27,goal:[22,25],gohlk:24,gone:37,good:[21,25,51],grab:[],grai:6,great:10,greater:29,greatli:4,green:[6,14,28,30,44],greenwich:36,grei:6,greys_r:44,grid:[23,27,48],ground:[],group:9,gtiff:[0,15,21,27,28,30,34,36,40,49,50,51,52],gtiff_force_rgba:32,guard_transform:17,guid:[],guidanc:[22,24],guidelin:[28,50],had:[21,24,27,28,41,46,51],half:27,handi:28,handl:[],handler:[7,28],happen:41,happili:5,harder:4,have:[13,21,22,24,25,27,28,30,37,41,42,46,49,50,51],head:22,header:[22,24],height:[0,11,17,19,20,21,27,34,36,38,40,43,47,49,50,51],help:[0,21,22,31,41,47,49],hemispher:27,henc:27,here:[3,5,21,22,23,24,27,29,31,37,42,47,49,51,52],hfek2oko:47,hidden:22,high:[9,27],higher:[23,48],highli:[22,37,52],highlight:[14,42],hing:22,hist:14,histogram:[14,44],histori:42,histtyp:44,hold:30,holder:25,hole:10,home:[],homebrew:[22,24],hood:[],horizont:27,how:[21,22,27,28,29,45,46],howev:[25,42],html:[0,14,41,47],http:[0,3,4,7,14,21,22,28,32,36,41,47,50],hue:6,icclab:6,idea:51,ideal:21,ident:[21,41,51],identifi:[27,28,41],idiom:25,idiomat:25,idx:28,ignor:41,imag:[],image_structur:49,imagemagick:21,imageri:[9,23,27,41,50],imagin:36,immedi:46,implement:[9,14,18,21,27,42],impli:25,implicit:[],implicitli:[],importfromwkt:[],improv:[21,31],imshow:[14,40,41,44,46],in16:21,incident:25,includ:[14,21,22,24,25,28,31,32,37,49],inclus:21,incompat:[],increas:[0,21,22,36,48],increment:[11,21],indent:21,index:[],indici:17,indirect:25,indirectrasterupdat:52,individu:21,infil:31,influenc:37,inform:[],inher:41,init:[3,19,27,28,36,47,50],init_dest_nodata:19,initi:[],innermost:20,input:[3,9,12,13,14,20,21,22,29,31,34,46],insid:22,inspector:[21,49],instanc:[0,10,11,17,28,32,44],instanti:3,instead:[4,11,14,24,25,27,34,42,46],instruct:[22,24],int16:[5,9],int32:[5,9],integ:[3,5,9,10,27,41,48,51],intend:[9,19,21],intens:31,intent:22,intenum:6,interact:[21,42,49],interest:28,interfac:[],interior:41,interleav:[6,15,21,49,50],intern:[22,37,41,43],interpol:[10,19,44,47,48],interpret:[],interrupt:25,intersect:[20,34,51],introduct:[],invalid:[8,28,41,52],invers:[10,41],invert:[9,12,21,28],invok:28,involv:[21,29,42,48],ioerror:[],ipython:21,irregularli:10,is_blacklist:4,is_epsg_cod:3,is_ndarrai:5,is_valid:3,isol:22,item:[3,21,28,30,32,34,51],iter:[9,10,20,28,34,51],iter_arg:20,itself:24,itulab:6,j1ho338j:21,job:31,jpeg:[0,6,11,37],json:[3,21],just:[28,41,48,49],keep:[21,22,48],kei:[3,14,28,32,49],kept:12,keyword:[0,14,27,32,37,47,49],kilomet:27,kind:[21,25,28,41],know:[24,32,52],known:[5,22,47,52],kwarg:[0,3,14,19,28,44,47,51],kwd:15,label:[14,44],lack:41,lambda:44,lanczo:[6,19],land:[3,27],landsat:[27,28,50],languag:[22,25],larg:[9,19,27,51],larger:[48,51],largest:9,last:[27,28,41,46],latenc:50,later:34,latitud:[21,27],latitude_of_origin:36,latlong:27,latter:[7,29,42],law:3,layer:[34,46],layout:22,lc80370342016194lgn00:27,lc81390452014295lgn00:[28,50],lc81390452014295lgn00_b1:[28,50],leaflet:21,least:[0,49,50],leav:3,left:[0,2,11,13,14,17,19,20,21,27,28,34,36,51],len:51,less:[],let:[41,52],level:[21,27,42],leverag:[22,43,52],lgdal_i:24,liabil:25,liabl:25,libatla:22,liber:[],libgdal:[22,24,28,43,47],librari:[7,22,24,25,28,31,32,42],licens:[],lifecycl:[],light:6,lightweight:28,like:[0,3,5,9,10,12,14,19,20,21,24,25,27,28,29,32,34,38,41,42,45,46,50,51],limit:[4,11,20,25],line:[],linear:47,linearli:21,link:[28,46],linspac:27,linux:[],lisp:21,list:[3,5,9,12,13,14,17,20,21,25,37,40,51],littl:[25,52],live:22,lnglat:21,load:28,local:[36,50],locat:[24,27,36,42],log:[22,27],logo:34,lol:46,longer:46,longitud:[21,27],longlat:[0,3,21],look:[21,22,26,29,41,42],loss:[5,25,48],lot:32,low:41,lower:[27,48,51],lzma:6,lzw:[6,15,21,52],mac:[],made:[21,32],magenta:6,magic:41,magnitud:[11,17],mai:[0,7,9,13,21,22,25,27,28,29,36,42,43,46,48,49,51],main:[21,22,31],mainli:[],maintain:[11,24,49],major:[24,49],make:[6,21,28,31,32,43,47,50],manag:[7,22,32,33,46,52],mandatori:22,mani:[4,24,25,28,37,50],manipul:41,map:[0,3,5,7,8,12,13,17,21,27,30,31,36,42,47],mapbox:[21,22,25,47],mar:41,mark:[10,41],mask:[],masked_arrai:28,maskedarrai:41,maskflag:6,master:22,match:[9,17,21,22,51],materi:25,math:11,matplotlib:[14,38,40,41,44,46],matrix:[0,11,20,21,27,28,36,47],matter:46,max:[6,21],max_search_dist:10,max_work:31,maxi:9,maximum:[],maxmimum:10,maxx:9,mayb:[],mbtile:21,mean:[4,21,25,27,28,31],measur:27,med:6,member:21,memori:[9,52],mention:[28,41,42],mercat:[21,36,47],merchant:25,merg:[],meridian:27,meshgrid:27,messag:[8,21,28],met:25,meta:[21,30,31,37,40,47,51],metadata:[11,14,21,41,49,50],metavar:31,meter:27,method:[],metr:36,microsoft:24,might:20,migrat:[],mimic:[27,46],min:[6,21],mind:[],mindset:[],mini:9,minim:24,minimum:[5,9],minisblack:6,miniswhit:6,minx:9,miss:[10,22,41],mixin:11,mode:[],model:[10,22,23,25,27,49],modern:25,modif:25,modifi:[8,9,21,28,31],more:[3,10,21,22,24,25,27,28,29,42,46,47,49,50,52],mosaic:41,most:[9,14,21,22,24,32,46,51],mostli:52,msk:[37,41],much:[21,31,42],multi:[14,44],multiband:[21,44],multipli:48,multiprocess:31,must:[0,9,10,11,13,19,20,21,22,24,25,43,48,50,52],mutual:[],naiv:28,name:[],namedtupl:[9,28],namespac:[21,22,28,42,43,49],nanomet:27,narr:26,nativ:[36,37],navig:41,ndarrai:[0,5,9,10,12,13,19,20,23,28,41,42,44,46],ndimag:[47,48],nearest:[6,19,28,43,47,48],necessari:[7,24],need:[7,14,22,24,28,30,32,43,48],neg:[0,11,17,20,51],neglig:25,neighbor:9,neither:25,netcdf4:4,netcdf:[4,52],network:11,never:28,new_config:28,new_dataset:27,new_msk:41,newaff:48,newarr:48,newer:24,newrast:[],newraster_gd:[],next:[21,27,34],nnnn:[3,21],no_def:[0,3],nodata:[],nodatashadowwarn:8,nodatav:[41,46],nogil:31,non:[20,24,25,41,47,49],none:[0,6,7,9,10,12,13,14,16,18,19,20,24,32,44,50,51],nonexist:46,nonlinear:19,nonzero:46,nor:[25,41],normal:[22,32],north:[0,11,17,20,27,36],northern:27,note:[0,3,6,9,19,21,24,29,37,41,44,46,48],notic:25,now:[41,42],nth:21,num_job:31,num_work:31,number:[0,9,10,11,13,17,19,20,21,27,28,31,38,41,46,48,51],numer:[28,48],numpi:[],object:[3,7,9,11,12,13,14,19,20,22,25,31,32,34,36,42,46,50,51],obtain:[21,27,46],occur:[22,48],ock:21,off:51,offer:29,offset:[11,17,19],often:[21,22,32,41],ogr:[32,37],oli:27,omit:3,onc:[0,10,32],onli:[9,11,12,14,22,24,25,27,28,32,34,41,47,48,51,52],onto:51,open:[],opportun:22,oppos:21,opposit:28,opt:[12,14],option:[],order:[],ordinari:27,org:[0,3,7,14,21,32,41,47],organ:[23,32,38],orient:0,origin:[9,19,27,34,36,40,42,43,47,48,51],oserror:8,osgeo:[],osr:[],other:[],otherwis:[3,11,13,14,19,24,25,41,51],our:[22,27,40,41,48],out8:21,out:[9,10,19,21,25,28,29,40,41,42,43,47,48],out_imag:40,out_meta:40,out_rast:[],out_shap:[9,34,43],out_transform:[12,13,40],outer:51,outermost:[19,20],outfil:31,output:[],outsid:[12,21,22,40],over:[9,22,27,28,31,34],overag:22,overal:44,overhead:28,overlaid:40,overlap:[2,9,12,29],overrid:41,overwrit:[19,34],overwritten:[13,21],own:[21,23,28,37,51],packbit:6,pad:0,pad_width:0,page:[23,24,37,47],painter:[13,34],pair:[3,9,14,31,34,49,51],palett:6,parallel:51,param:31,paramet:[0,2,3,5,9,10,11,12,13,14,17,19,20,21,36,48],parameter:47,parametr:27,pars:18,parse_arg:31,parse_path:18,parser:31,part:[18,27,32,36],partial:27,particular:[25,27,37],partli:47,pass:[3,7,10,13,14,19,21,34,36,37,41,42,44],path:[0,11,18,21,24,27,43,45,46],pattern:[17,32],pep8:22,pep:7,per:[0,9,21,27,28,41,42,47,48,52],per_dataset:6,perform:[19,21,22,25,28,29,31,43,44,48],permiss:25,permit:25,phase:42,philosophi:[],photo:10,photometr:[21,30,37],photometricinterp:6,photoshop:21,pick:29,pillow:38,pink:[44,46],pip:[22,24,50],pitfal:25,pixel:[0,6,9,10,11,12,13,14,17,19,20,21,27,30,34,36,40,41,43,47,48,49,51],place:[11,17,19,21,28,43,48],plan:42,plateau:27,platform:22,pleas:[22,24,52],plop:51,plot:[],plotting_ext:14,png:34,point:[5,7,9,10,19,21,27,28,42,47],pointer:[25,28],polici:4,polit:21,polygon:[9,12,21,23,34,40],pool:31,poorli:4,portion:22,posit:[11,17,21,27,47,49,51],possibl:[4,7,21,22,25,27,28,29,31,47],post:22,potenti:[25,48],power:28,ppa:[22,24],pprint:34,practic:[22,28,49],pre:47,preced:41,precis:[9,11,13,17,19,20,21,23],precomput:43,prefer:[22,24,37],prefilt:48,preinstal:24,present:[4,12,24,43],preserv:19,pressur:27,presum:27,prev_config:28,prevent:[19,44],previou:[7,19,28,29,48],previous:[28,42],price:50,primari:[21,45],primarili:14,primem:36,print:[21,23,28,32,46,50,51],prior:25,prj:3,problem:[4,25,41,52],procedur:[],process:[],processor:31,procur:25,produc:[9,19,21,42,51,52],product:[25,27,28,47],profil:[],profile_nam:7,profit:25,program:[21,23,25,28,30,31],programat:37,programm:[],proj4:[0,24],proj:[0,3,21,27,28,36],projc:36,project:[3,22,23,28,36],promot:25,prompt:[21,46],propag:28,proper:[27,44],properli:41,properti:[],proport:9,propos:22,protocol:[22,25,27,28],provid:[9,11,13,19,20,21,22,23,24,25,28,34,38,41,42,44,46,47],provis:22,pull:22,purpos:[25,37],pxd:22,pypi:[22,24],pyplot:[14,44,46],pyproj:[28,36],pytest:[22,49],python:[],pyx:22,qgi:27,qualiti:43,question:[],quickli:48,quickstart:[],quiet:21,quirk:[],quit:41,r_arr2:[],r_arr:[],r_band1_arr:[],radianc:27,rais:[0,8,14,20,22,32,42,46,49,52],ram:[28,51],ramp:44,rang:[5,20,21,27,31,41,47,51],raster2:38,raster:[],rasterband:[],rastercount:[],rasterio_test:49,rasterio_vers:[],rasterioioerror:[8,46,52],rasterread:[0,9,12,13,44],rasterstat:[],rasterupdat:52,rate:0,rather:[14,29,42,43],ratio:21,raw:21,reactiv:22,read:[],read_mask:[],read_window:51,readasarrai:[],reader:[0,11,43],readi:[21,22],readm:[22,29,46],real:31,realli:41,reason:[28,32],recalul:48,receiv:42,recent:[22,46],recogn:22,recommend:[0,22,37,48,52],recompil:22,recov:32,recreat:[],rectangular:[41,51],red:[6,14,28,30,40,44],redistribut:25,reduc:[28,43,50],referenc:[27,29,44],reflect:27,reflectac:[],refus:8,region:[10,12,21,27,36,40,41],region_nam:7,regist:[7,8,28,42,52],registr:28,registri:[7,21,28],regular:27,rel:[22,27,51],relat:[11,20,42],relationship:[21,32,41,50],releas:[22,24,31],relev:22,reli:[24,41],reliabl:22,remain:[19,42,47],rememb:28,remov:[],render:43,replac:[9,34,42],repo:22,report:22,repositori:[22,24],repres:[5,12,27,28,41,44],represent:[],reproduc:25,reproject:[],request:[8,22,50],requir:[],rescal:27,reserv:25,reset:32,reshap:[14,38],reshape_as_imag:[14,38],reshape_as_rast:[14,38],resolut:[13,19,21,43,47,48],resourc:50,respect:[0,28],rest:28,restor:28,result:[0,9,21,30,31,34,41,47,48,51,52],retain:[9,25,48],review:22,rfc15:41,rfc:41,rgb:[6,14,21,29,30,31,36,38,40,41,42,43,44,46,47,49,51],rgba:[30,41],right:[],rio_overview:43,rio_plugin:21,road:42,role:[],rotat:0,round:[11,17,19,41,48],row:[0,11,14,17,20,21,27,28,36,38,41,46,47,51],row_start:[11,20,28,51],row_stop:[11,20,28,51],rowcol:17,rpc:49,rst:46,run:[],runtim:46,safe:41,sai:27,said:41,same:[9,10,13,21,22,24,27,28,29,41,42,46,48,51],sampl:[],sample_gen:16,satellit:23,satur:6,save:[],scale:[21,27,29,41,47,51],scale_factor:36,scale_offset:21,scale_ratio:21,scene:[27,41],scheme:[18,28],scikit:[14,38],scipi:[],scope:21,screen:36,script:[21,22,24],sean:41,search:[10,22,23],second:[21,34,51],section:27,secur:47,see:[0,7,9,14,21,22,24,28,36,37,40,41,46,47,48],select:[9,12,14,21,34,51],sens:[28,41],separ:[21,22,24],seq:17,sequenc:[0,21,28,51],seri:51,serv:[8,28],servic:25,session:[7,50],set:[3,7,9,11,12,13,17,19,21,28,30,32,37,40,44,51,52],setconfigopt:[28,32],setenv:7,seterrorhandl:28,setgeotransform:[],setproject:[],setup:[],sever:[27,42],sgilli:[21,36,47],shade:[21,30],shadow:[8,41],shake:41,shall:25,shape:[],share:[21,27],shell:[21,22],shift:27,ship:24,shoot:21,shorthand:[19,21],should:[0,4,14,21,22,24,28,41,43,51],show:[14,21,41,44,46,47],show_hist:[14,44],shown:[0,21,27,28,30,50],shp:[21,40],shutil:[41,43],side:22,sidecar:[37,41],siev:[9,29,41,42],sieved_msk:41,sign:[11,17,27],signific:[],significantli:43,similar:[21,28],similarli:[22,27,34,44,51],simpl:[9,21,29,40],simpli:3,simul:31,sinc:[5,40,42,49,51],singl:[13,20,22,27,28,29,32,40,42,44,46,52],situat:31,six:22,size:[7,9,17,21,22,27,28,41,44,48],skip:[41,46],slice:51,slightli:[],slower:29,small:[9,10,22,41],smaller:[46,48,51],smooth:10,smoothing_iter:10,snugg:29,softwar:[],sole:27,solv:4,some:[4,21,22,23,27,28,29,32,36,37,38,41,42,43,46,48,52],someth:[5,21,24,28],sometim:[41,51],somewher:22,soon:7,sourc:[],south:[11,17,20,27],space:[0,27],spars:10,spatial:[],spatialrefer:[],special:[25,28,48],specif:[0,15,21,25,27,28,29,32,37,47,52],specifi:[0,11,12,14,19,21,22,27,30,34,37,43,44,48,51,52],speed:[31,43],spheroid:36,spline:48,split:19,spread:31,squar:13,squash:27,src2:30,src:[],src_cr:[19,47,48],src_nodata:19,src_shape:47,src_transform:[19,47,48],staff:41,stai:48,standard:[4,24,25,29,49],start:[0,21,23,24,28,29,46,51,52],stat:[21,49],state:[7,8,27,28],statement:[28,32,46],statist:[21,48],statistics_mean:49,stdin:21,stdout:[21,23],stefan_full_greyalpha:32,step:21,stepfil:44,still:42,stop:51,storag:41,store:[9,21,23,27,41,43,50],stori:27,str:[0,3,11,14,17],straightforward:41,streamlin:51,street:[],strict:25,string:[0,3,5,8,21,28,30,36],strongli:22,structur:[21,51],stuck:48,studio:24,style:[],subclass:[11,15],subcommand:21,subdataset:49,submit:31,subplot:44,subprocess:30,subset:[6,28,51],subset_window:28,substitut:25,succe:4,success:[24,32],sudo:[22,24],suffic:27,suffici:32,suggest:[19,21],suit:[22,32,48],suitabl:[10,48],summari:46,superset:22,support:[],surfac:[27,28],swap:[14,38],swig:[],sync:27,syntax:[21,28,32,36],system:[],tag:[],take:[],taken:[13,27],tar:[0,28],target:[19,21,24,27,47],task:44,tastes_like_gd:17,technic:22,techniqu:48,tell:22,temperatur:27,templat:21,temporari:[42,52],tend:25,term:22,terrain:23,test:[],test_band:22,text:[3,21,52],than:[14,22,29,38,42,43,51,52],thei:[2,20,28,32,41,42,49,51],them:[21,24,25,28,37,41,43],themat:9,themselv:[29,51],theori:25,therebi:47,thi:[0,3,5,7,9,10,11,14,19,20,21,22,24,25,26,27,28,29,31,32,34,36,37,40,41,42,44,46,47,48,50,51,52],thin:28,thing:[41,46],third:[29,51],those:[21,30,41,48],thread:31,threadpoolexecutor:31,three:[14,19,29,41,48],through:[22,27,32,37,43,44],throughout:5,thu:[27,28,44],tif:[21,23,27,28,29,30,31,32,34,36,37,38,40,41,42,43,44,46,47,49,50,51,52],tiff:[21,30,49,50,52],tile:[15,21,31,37,47,50],time:[22,31,32,37,41],timelin:42,titl:[14,21,44],tmp:[21,27,30,31,34,36,41,43,47,49,51],to_dict:3,to_gdal:28,to_str:3,togeth:28,too:49,tool:[],top:[0,2,11,13,14,19,20,21,27,42],topic:[],tort:25,touch:[9,12,22,34],trac:32,traceback:[22,46],tracker:24,transform:[],transform_bound:[19,47],transform_geom:[19,23],transformmethodsmixin:11,transit:42,translat:47,transverse_merc:36,trapezoid:41,travi:24,travis_python_vers:[],treat:37,trigger:[],trivial:29,trusti:[],tune:37,tupl:[0,2,9,11,12,13,14,18,19,20,27,28,36,42,44,47,51],turn:[3,21,28],two:[2,12,13,21,27,28,30,36,37,41,42,44,45,46,47,48],txt:[22,24],type:[0,5,9,13,21,22,23,25,27,30,31,34,41,46,49,52],typic:[37,41],ubuntu:22,ubuntugi:[22,24],ubyt:[0,51],uint16:[0,9,21,27,50],uint32:9,uint8:[5,9,15,21,28,30,31,34,36,41,46,47,49,52],uint:19,unawar:21,unbuff:11,undefin:6,under:[],underli:[44,48],understand:41,unexpect:[],unexplain:42,unicod:49,unidata:4,union:[20,51],uniqu:51,unit:[11,13,19,27,28,34,36],univers:31,unix:[24,28],unknown:22,unless:[22,48],unpredict:28,unreli:49,unsaf:[],unset:[7,28,32,41],unsign:[27,31,41],until:[0,28,49],unwant:48,updat:[0,11,21,22,24,31,40,41,43,47,49,51,52],update_tag:[43,49],upload:[21,47],upon:28,upper:[11,17,21,27,28,34,36,51],upsampl:[43,48],uri:[18,22,28,50],url:[18,45],usag:21,useexcept:28,userdict:15,usual:0,util:[],utm:[27,36],val:[23,28,31,32],valid:[3,5,9,13,20,25],valid_dtyp:5,validate_dtyp:5,valu:[0,3,5,7,9,10,11,12,13,14,17,19,20,21,23,27,28,29,30,34,41,46,48,49,51],valuabl:22,valueerror:[0,8,20,46,49],vari:[4,10],variabl:[9,22,32,37],variant:22,variou:14,verbos:[21,22],veri:22,version:[21,22,23,24,27,43],vertic:27,via:[24,27,28,37],view:51,viewer:30,viridi:44,virtual:[],virtualenv:22,visit:24,visual:[14,24,43],vsi:[18,46],vsi_path:18,vsicurl:[28,50],vsis3:[28,50],vsitar:28,vsizip:28,vvv:22,wai:[0,22,25,29,34,37,38,48],wait:41,walk:[],want:[24,26,28,32,36,41,43,48],warn:[8,28,42],warp:[],warranti:25,watch:25,wavelength:27,web:[21,36,47],websit:24,weight:10,welcom:[21,22],well:[22,28,47,51],were:42,west:[11,17,20,27],wgs84:[0,3,21,47],wgs_1984:36,what:[25,26,27,32,41,43,46],wheel:24,wheelhous:[],when:[],where:[3,9,22,27,28,29,31,41,48],wherea:3,wherev:29,whether:[12,14,25],which:[9,10,12,19,20,21,22,24,27,28,31,32,34,36,41,42,43,47,48,51,52],white:[6,34],whl:24,who:26,whole:[11,17],whose:[9,12,21,34],why:28,wide:[22,27,41],width:[0,11,17,19,20,21,27,34,36,38,40,43,47,49,50,51],wiki:[22,32],win32:24,window1:51,window2:51,window:[],window_bound:11,window_index:20,window_intersect:42,window_transform:[11,51],window_union:42,windowmethodsmixin:11,windows_intersect:42,with_bound:14,within:[0,5,9,12,19,20,21,22,27,28,34,41,46,51],without:[5,25,32],wkt:36,word:48,work:[],workflow:[21,22],world:[27,36],wors:19,would:[25,28,30,34,42],wrap:[0,7],wrapper:[11,28],writabl:52,write:[],write_colormap:30,write_mask:41,write_window:51,writearrai:[],writer:11,written:[19,22,25,27,29,34,37,41,49,52],wrong:22,wut:46,www:[0,7],x_max:[11,20],x_min:[11,20],xcode:24,xmax:[2,21],xmin:[2,21],xsize:17,xzvf:[],y_max:[11,20],y_min:[11,20],ycbcr:[6,37],yellow:6,yet:[22,42],yield:[9,30,31,34,51],ymax:[2,21],ymin:[2,21],you:[0,3,21,24,28,29,30,32,34,36,37,38,41,43,44,46,48,49,50,51,52],your:[21,22,24,36,43,48,50,51],ysize:17,zero:[10,31,40,41,47],zeros_lik:47,zip:[0,27,28,46,50],zone:[27,36],zoom:[41,43,47,48]},titles:["rasterio package","rasterio.compat module","rasterio.coords module","rasterio.crs module","rasterio.drivers module","rasterio.dtypes module","rasterio.enums module","rasterio.env module","rasterio.errors module","rasterio.features module","rasterio.fill module","rasterio.io module","rasterio.mask module","rasterio.merge module","rasterio.plot module","rasterio.profiles module","rasterio.sample module","rasterio.transform module","rasterio.vfs module","rasterio.warp module","rasterio.windows module","Command Line Users Guide","Contributing","Rasterio: access to geospatial raster data","Installation","Introduction","<code class=\"docutils literal\"><span class=\"pre\">rasterio</span></code> Python User&#8217;s Manual","Quickstart","Switching from GDAL&#8217;s Python bindings","Using rio-calc","Color","Concurrent processing","GDAL Option Configuration","Error Handling","Vector Features","Filling nodata areas","Georeferencing","Options","Interoperability","General Concepts","Masking a raster using a shapefile","Nodata Masks","Migrating to Rasterio 1.0","Overviews","Plotting","Profiles and Writing Files","Reading Datasets","Reprojection","Resampling","Tagging datasets and bands","Virtual Files","Windowed reading and writing","Writing Datasets"],titleterms:{"enum":6,"function":42,"switch":28,access:23,addit:22,advanc:[23,51],affin:42,anaconda:24,api:23,area:35,arithmet:29,arrai:41,attribut:27,background:[],band:[28,29,49],between:[],binari:24,bind:28,block:51,bound:21,build:22,burn:34,calc:[21,29],chang:42,cli:23,clip:21,code:22,color:30,colormap:30,command:21,compat:1,concept:39,concurr:31,conduct:22,configur:[32,37],content:0,contribut:22,contributor:23,convent:22,convert:21,coord:2,coordin:[28,36],copi:29,creat:27,creation:[21,37],data:[23,27,28,51],dataset:[27,28,29,41,42,46,47,49,52],decim:[48,51],depend:24,deprec:42,design:22,develop:22,differ:[],distribut:24,document:23,downsampl:48,downstream:[],driver:[4,28,42,52],dtype:5,edit:21,env:[7,32],environ:[22,28],error:[8,33],estim:47,exampl:32,express:29,extract:34,featur:[9,34],file:[29,41,45,50],fill:[10,35],format:28,from:[24,28],gdal:[22,28,32,42],gener:39,georeferenc:[27,36],geospati:23,geotiff:47,geotransform:[28,42],git:22,global:[],gotcha:[],guid:[21,23],handl:33,imag:38,incompat:28,index:27,indic:23,info:21,inform:22,initi:22,insp:21,instal:[22,24],interfac:[],interoper:38,interpret:30,introduct:25,issu:22,licens:25,line:21,linux:24,logic:29,manag:[],manual:26,mask:[12,21,28,40,41],merg:[13,21],method:48,migrat:42,mode:27,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],move:42,multipl:29,mutual:28,name:29,nodata:[35,41],numpi:41,object:[],offset:28,open:27,oper:[29,42],optim:47,option:[21,32,37],order:29,osgeo:[],other:21,output:47,overview:[21,43],packag:0,philosophi:25,plot:[14,44],plugin:21,principl:22,process:[31,38],profil:[15,45],properti:[],python:[22,26,28],quickstart:27,raster:[21,23,27,34,40,41],rasterio:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,25,26,32,42],read:[27,29,30,41,46,48,49,51],read_band:42,read_mask:42,refer:[28,36,47],remov:42,represent:41,reproject:[47,48],requir:22,resampl:[42,48],revers:29,right:22,rio:[21,29],run:22,sampl:[16,21],save:27,scipi:48,setup:22,shape:[21,34,47],shapefil:40,signatur:42,softwar:38,sourc:24,spatial:27,src:42,stack:[21,29],style:42,submodul:0,support:52,system:[28,36],tabl:23,tag:49,take:29,test:22,ticket:42,todo:[26,33,35,46,50,52],tool:42,topic:23,transform:[17,21,36],user:[21,23,26],util:51,valid:28,variabl:[],vector:34,virtual:50,warp:[19,21,42],when:32,window:[20,24,28,42,51],work:42,write:[27,30,41,45,49,51,52]}})