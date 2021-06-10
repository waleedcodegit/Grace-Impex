<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RequestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($title, $name , $phone , $msg , $email)
    {
        // $this->$code = $code;
        view()->share('title', $title);
        view()->share('name', $name);
        view()->share('phone', $phone);
        view()->share('msg', $msg);
        view()->share('email', $email);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Contact Us Request")->view('emails.requestmail')->from("demo.campusportal@gmail.com","Grace Impex");
    }
}
