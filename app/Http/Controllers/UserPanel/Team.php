<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Reentry;
use Illuminate\Support\Facades\DB;
use Auth;
use Log;
use Session;
use Redirect;
use Hash;
use Validator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class Team extends Controller
{
  public function index(Request $request)
  {
    $user = Auth::user();
    // print_r($user->username);die();
    $my_level_team = $this->my_level_team_count($user->id);


    // print_r($ids);die;
    $limit = $request->limit ? $request->limit : paginationLimit();
    $selected_level = $request->selected_level ? $request->selected_level : 1;

    $search = $request->search ? $request->search : null;
    // $notes = User::where('sponsor',$user->username);
    $gen_team =  (array_key_exists($selected_level, $my_level_team) ? $my_level_team[$selected_level] : array());
    end($my_level_team);
    $key = key($my_level_team);
    $max_lenght = $key;

    ($selected_level) ? Session::put('selected_level', $selected_level) : "";

    // $notes = User::where('sponsor',$user->username);
    $notes = User::where(function ($query) use ($gen_team) {
      if (!empty($gen_team)) {
        foreach ($gen_team as $key => $value) {
          //   $f = explode(",", $value);
          //   print_r($f)."<br>";
          $query->orWhere('id', $value);
        }
      } else {
        $query->where('id', null);
      }
    })->orderBy('id', 'DESC');

    if ($search <> null && $request->reset != "Reset") {
      $notes = $notes->where(function ($q) use ($search) {
        $q->orWhere('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
      });
    }
    $notes = $notes->paginate($limit)
      ->appends([
        'limit' => $limit
      ]);

    $this->data['direct_team'] = $notes;
    $this->data['search'] = $search;
    $this->data['max_lenght'] = $max_lenght;

    $this->data['page'] = 'user.team.direct-team';
    return $this->dashboard_layout();
  }

  //  public function LevelTeam(Request $request)
  // {
  //     $user = Auth::user();
  //     $levels = $this->my_level_team_count($user->id);

  //     $level_summary = [];

  //     // Step 1: Build level summary (user count, income, total amount)
  //     foreach ($levels as $level => $user_ids) {
  //         if (!empty($user_ids)) {
  //             $user_count = count($user_ids);

  //             $total_income = DB::table('incomes')
  //                 ->whereIn('user_id', $user_ids)
  //                 ->sum('comm');

  //             $total_amount = DB::table('incomes')
  //                 ->whereIn('user_id', $user_ids)
  //                 ->sum('amt');

  //             $level_summary[] = [
  //                 'level' => $level,
  //                 'user_count' => $user_count,
  //                 'total_income' => $total_income,
  //                 'total_amount' => $total_amount,
  //             ];
  //         }
  //     }

  //     // Step 2: Top 10 level income
  //     $top10_level_income = [];
  //     foreach ($levels as $level => $user_ids) {
  //         if ($level <= 10 && !empty($user_ids)) {
  //             $income = DB::table('incomes')
  //                 ->whereIn('user_id', $user_ids)
  //                 ->sum('comm');
  //             $top10_level_income[$level] = $income;
  //         }
  //     }

  //     // Step 3: Manual pagination for level_summary array
  //     $page = $request->get('page', 1);
  //     $perPage = 10;
  //     $offset = ($page - 1) * $perPage;

  //     $level_summary_paginated = new \Illuminate\Pagination\LengthAwarePaginator(
  //         array_slice($level_summary, $offset, $perPage, true),
  //         count($level_summary),
  //         $perPage,
  //         $page,
  //         ['path' => $request->url(), 'query' => $request->query()]
  //     );

  //     // Step 4: Paginate users
  //     $ids = [];
  //     foreach ($levels as $arr) {
  //         $ids = array_merge($ids, $arr);
  //     }

  //     $limit = $request->limit ? $request->limit : paginationLimit();
  //     $search = $request->search ?? null;

  //     $notes = User::whereIn('id', $ids)
  //         ->when($search, function ($q) use ($search) {
  //             $q->where('name', 'LIKE', "%$search%")
  //                 ->orWhere('username', 'LIKE', "%$search%")
  //                 ->orWhere('email', 'LIKE', "%$search%")
  //                 ->orWhere('phone', 'LIKE', "%$search%");
  //         })
  //         ->orderBy('id', 'DESC')
  //         ->paginate($limit)
  //         ->appends(['limit' => $limit]);

  //     // Step 5: Team total investment
  //     $team_total_investment = DB::table('incomes')
  //         ->whereIn('user_id', $ids)
  //         ->sum('amt');

  //     // Step 6: Logged-in user total investment
  //     $user_total_investment = DB::table('incomes')
  //         ->where('user_id', $user->id)
  //         ->sum('amt');

  //       $level_income_total = $user->level_income();
  // $tolteam = $this->my_level_team_count($user->id);

  // // flatten nested array
  // $all_team_ids = [];
  // foreach ($tolteam as $arr) {
  //     if (is_array($arr)) {
  //         $all_team_ids = array_merge($all_team_ids, $arr);
  //     }
  // }

  // // remove duplicates just in case
  // $all_team_ids = array_unique($all_team_ids);

  // $total_teams = User::whereIn('id', $all_team_ids)->count();
  // $total_team = User::whereIn('id', $all_team_ids)
  //                   ->where('active_status', 'Active')
  //                   ->count();


  //     // Step 7: Pass all data to view
  //     $this->data['level_income_total'] = $level_income_total;

  //     $this->data['direct_team'] = $notes;
  //     $this->data['level_summary'] = $level_summary_paginated;
  //     $this->data['top10_level_income'] = $top10_level_income;
  //     $this->data['team_total_investment'] = $team_total_investment;
  //     $this->data['user_total_investment'] = $user_total_investment;
  //        $this->data['total_team'] =$total_team;

  //         $this->data['total_teams'] =$total_teams;
  //     $this->data['search'] = $search;
  //     $this->data['page'] = 'user.affialiate';

  //     return $this->dashboard_layout();
  // }




  public function leftteam(Request $request)
  {
    $user = Auth::user();
    // print_r($user->username);die();
    $ids = $this->team_by_position($user->id, 'Left');

    $limit = $request->limit ? $request->limit : 10;
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    // $notes = User::where('sponsor',$user->username);
    $notes = User::whereIn('id', $ids);
    if ($search <> null && $request->reset != "Reset") {
      $notes = $notes->where(function ($q) use ($search) {
        $q->orWhere('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
      });
    }
    $notes = $notes->paginate($limit)
      ->appends([
        'limit' => $limit
      ]);

    $this->data['direct_team'] = $notes;
    $this->data['search'] = $search;
    $this->data['page'] = 'user.team.left-team';
    return $this->dashboard_layout();
  }



  public  function team_by_position($userid, $position)
  {
    $ret = array();
    $get_position_user = User::where('Parentid', $userid)->where('position', $position)->first();
    if ($get_position_user) {

      $ret = $this->my_binary($get_position_user->id);
      $ret[] = $get_position_user->id;
    }

    return $ret;
  }



  public  function my_binary($userid)
  {
    $arrin = array($userid);
    $ret = array();
    // print_r($arrin);die();
    while (!empty($arrin)) {
      $alldown = User::select('id')->whereIn('Parentid', $arrin)->get()->toArray();
      if (!empty($alldown)) {
        $arrin = array_column($alldown, 'id');
        $ret[] = $arrin;
      } else {
        $arrin = array();
      }
    }
    // continue;    
    $final = array();
    if (!empty($ret)) {
      array_walk_recursive($ret, function ($item, $key) use (&$final) {
        $final[] = $item;
      });
    }

    return $final;
  }



  public function find_users($snode, $pos)
  {
    // $this->load->model('Dashboard_model');
    $user_just_downline = User::where('Parentid', $snode)->where('position', $pos)->first();
    return $user_just_downline;
  }



  public function genealogy(Request $request)
  {
    $user = Auth::user();
    $tuser = $request->user_id;
    if ($tuser == NULL) {
      $suser = @$request->suser;
      if ($suser == "") {
        $username = $user->username;
      } else {
        $session_id = $user->id;
        $username = $suser;
        $user_id = User::where('username', $username)->first();
        if ($user_id->id > $session_id) {
          $username = $suser;
        } else {
          $username = $user->username;
        }
      }
    } else {
      $username = $tuser;
    }

    $check = User::where('username', $username)->count();;
    if ($check > 0) {
      $username = $username;
    } else {
      $username = $user->username;
    }

    $complete_tree = array();
    $pool = 'users';
    $user_id = User::where('username', $username)->first();
    $user_id = @$user_id->id;
    $mydata = User::where('id', $user_id)->first();
    if ($user_id != "") {
      $childs_1 =   $this->find_users(@$user_id, 'Left');
      $childs_2 =   $this->find_users(@$user_id, 'Right');

      if (!empty($childs_1)) {
        $childs_3 =   $this->find_users(@$childs_1->id, 'Left');
        $childs_4 =   $this->find_users(@$childs_1->id, 'Right');
      } else {
        $childs_3 = array();
        $childs_4 = array();
      }

      if (!empty($childs_2)) {
        $childs_5 =   $this->find_users(@$childs_2->id, 'Left');
        $childs_6 =   $this->find_users(@$childs_2->id, 'Right');
      } else {
        $childs_5 = array();
        $childs_6 = array();
      }
    }

    $this->data['childs_1'] = $childs_1;
    $this->data['childs_2'] = $childs_2;
    $this->data['childs_3'] = $childs_3;
    $this->data['childs_4'] = $childs_4;
    $this->data['childs_5'] = $childs_5;
    $this->data['childs_6'] = $childs_6;
    $this->data['mydata'] = $mydata;
    $this->data['page'] = 'user.team.tree-view';
    return $this->dashboard_layout();
  }
  public function LevelTeam(Request $request)
  {
    $user = Auth::user();

    // Step A: Get raw ids (may be nested)
    $ids = $this->my_level_team_count($user->id);
    // $tolteam = $this->my_level_team_count($user->id);

    // Step B: Flatten nested array into single-level array
    $all_ids = [];
    if (!empty($ids) && is_array($ids)) {
      foreach ($ids as $item) {
        if (is_array($item)) {
          $all_ids = array_merge($all_ids, $item);
        } else {
          // item might be single id (not array)
          $all_ids[] = $item;
        }
      }
    }

    // clean: remove nulls/empties and keep unique ints
    $all_ids = array_filter($all_ids, function ($v) {
      return $v !== null && $v !== '' && $v !== 0;
    });
    $all_ids = array_map('intval', $all_ids);
    $all_ids = array_values(array_unique($all_ids));

    // If no ids found, give a neutral value so queries don't break.
    // (whereIn([]) can give unexpected results in some drivers)
    if (empty($all_ids)) {
      $all_ids = [0]; // assuming you have no user with id 0
    }

    // Pagination / filters
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ?? null;
    $search = $request->search ?? null;

    // Use whereIn directly (clean & efficient)
    $notesQuery = User::whereIn('id', $all_ids)
      ->orderBy('id', 'DESC');

    if ($search !== null && $request->reset !== "Reset") {
      $notesQuery = $notesQuery->where(function ($q) use ($search) {
        $q->orWhere('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
      });
    }

    $notes = $notesQuery->paginate($limit)
      ->appends(['limit' => $limit]);

    // Team total investment (use flattened ids)
    $team_total_investment = DB::table('incomes')
      ->whereIn('user_id', $all_ids)
      ->sum('amt');
      
    $level_income_total = $user->level_income();
    $this->data['level_income_total'] = $level_income_total;
    $all_team_ids = [];
    foreach ($ids as $arr) {
      if (is_array($arr)) {
        $all_team_ids = array_merge($all_team_ids, $arr);
      }
    }

    // remove duplicates just in case
    $all_team_ids = array_unique($all_team_ids);

    $total_teams = User::whereIn('id', $all_team_ids)->count();
    $total_team = User::whereIn('id', $all_team_ids)
      ->where('active_status', 'Active')
      ->count();
    $user_total_investment = DB::table('incomes')
      ->where('user_id', $user->id)
      ->sum('amt');


    $top10_level_income = [];
    foreach ($ids as $level => $user_ids) {
      if ($level <= 10 && !empty($user_ids)) {
        $income = DB::table('incomes')
          ->whereIn('user_id', $user_ids)
          ->sum('comm');
        $top10_level_income[$level] = $income;
      }
    }
    // Prepare data for view
    $this->data['total_team'] = $total_team;
    $this->data['user_total_investment'] = $user_total_investment;
    $this->data['top10_level_income'] = $top10_level_income;

    $this->data['total_teams'] = $total_teams;
    $this->data['direct_team'] = $notes;
    $this->data['search'] = $search;
    $this->data['page'] = 'user.affialiate';
    $this->data['team_total_investment'] = $team_total_investment;

    return $this->dashboard_layout();
  }

  public function rightteam(Request $request)
  {
    $user = Auth::user();
    // print_r($user->username);die();
    $ids = $this->team_by_position($user->id, 'Right');

    $limit = $request->limit ? $request->limit : 10;
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    // $notes = User::where('sponsor',$user->username);
    $notes = User::whereIn('id', $ids);
    if ($search <> null && $request->reset != "Reset") {
      $notes = $notes->where(function ($q) use ($search) {
        $q->orWhere('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
      });
    }
    $notes = $notes->paginate($limit)
      ->appends([
        'limit' => $limit
      ]);

    $this->data['direct_team'] = $notes;
    $this->data['search'] = $search;
    $this->data['page'] = 'user.team.right-team';
    return $this->dashboard_layout();
  }





  public function my_level_team_count($userid, $level = 30)
  {
    $arrin = array($userid);
    $ret = array();

    $i = 1;
    while (!empty($arrin)) {
      $alldown = User::select('id')->whereIn('sponsor', $arrin)->get()->toArray();
      if (!empty($alldown)) {
        $arrin = array_column($alldown, 'id');
        $ret[$i] = $arrin;
        $i++;

        if ($i > $level) {
          break;
        }
      } else {
        $arrin = array();
      }
    }

    // $final = array();
    // if(!empty($ret)){
    //     array_walk_recursive($ret, function($item, $key) use (&$final){
    //         $final[] = $item;
    //     });
    // }


    return $ret;
  }
}
