import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Profile, SkillCategory } from '../../core/models/profile.model';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  profile!: Profile;
  skillCategories: SkillCategory[] = [];
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
    this.skillCategories = this.profileService.getSkills();
  }
}
