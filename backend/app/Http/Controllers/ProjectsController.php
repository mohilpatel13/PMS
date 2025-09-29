<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;

class ProjectsController extends Controller
{
    // Fetch all projects along with their associated tasks and users
    public function index()
    {
        $projects = Project::
        with('manager')->
        where('manager_id', auth()->id())
            ->get();
        $total_projects = $projects->count();
        return response()->json(
            [
                'projects' => $projects,
                'total_projects' => $total_projects
            ]
        );  
    }
}
