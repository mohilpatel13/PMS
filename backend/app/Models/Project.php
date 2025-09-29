<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    // 
    use HasFactory;

    protected $table = "projects";

    protected $fillable = [
        'name', 'description', 'manager_id'
    ];

    public function manager() {
        return $this->belongsTo(User::class, 'manager_id');
    }
}
