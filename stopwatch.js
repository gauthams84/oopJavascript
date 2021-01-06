/**
 * constructor function to create an obhect
 */
function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running){
            throw new Error('Stopwatch is already running');
        }
        running = true;
        startTime = new Date();

    };

    this.stop = function(){
        if(!running){
            throw new Error("Stopwatch is not running");
        }
        endTime = new Date();
        running = false;
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration =0;

    };

    // getter function
    Object.defineProperty(this, 'duration',{
        get:function(){
            return duration
        }
    });

}