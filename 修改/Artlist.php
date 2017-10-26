<?php
namespace app\index\controller;
use app\index\model\Article;
class Artlist extends Common
{
    public function index()
    {
    	$article=new Article();
        $cateid=input('cateid');
    	$artRes=$article->getAllArticles($cateid);
        $page = $artRes->render();


        $cate=new \app\index\model\Cate();
        $cateInfo=$cate->getCateInfo($cateid);
    	$this->assign(array(
    		'artRes'=>$artRes,
            'cateInfo'=>$cateInfo,
            'pages'=>$page
    		));
        return view('artlist');
    }

   
}
