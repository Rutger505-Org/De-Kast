CREATE TABLE `checkin` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`time_stamp` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`week_day` integer NOT NULL,
	`time_start` text NOT NULL,
	`time_end` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `subscription` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`sessions_per_week` integer NOT NULL,
	`courses_access` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE `post`;--> statement-breakpoint
ALTER TABLE `user` ADD `subscription_id` text REFERENCES subscription(id);