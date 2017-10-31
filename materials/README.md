Demo description:

1) talk about the "heisenbug", a bug that is difficult to detect during testing but manifests at runtime
2) mention that it is frustrating to find out that this is an issue via bug report (show osm tracker screenshots)
3) What if there was a better way to identify problematic code before it was deployed?
	show source code and "run the plugin" which brings it to this location: https://github.com/nguillaumin/osmtracker-android/blob/d80dea16e456defe5ab62ed8b5bc35ede363415e/app/src/main/java/me/guillaumin/android/osmtracker/gpx/ExportTrackTask.java#L158 mention that this is a real app we found the defect on
4) show sequence of callbacks as defined by the counterexample in the file "osmtracker.stdout" perhaps just showing counterexample is sufficient  
	Explanation of raw output:
		The verifier takes a dynamic trace of the application
		simplified trace: these are the methods and callbacks which the framework model tracks which were observed during the execution
		matched specifications: parts of the framework model which were used in this task
		Counterexample 172: This shows a sequence of callbacks and method invocations which lead to the exception within our framework model and the observed trace
	From this sequence you can clearly see what callbacks are involved in reaching the problem
	Note the matched specification on line 249 shows "... |- [CI] Dialog.dismiss()"  This means that the ordering of dismiss and onPause is critical to not crashing in this way
5) we suggest ways of correcting the application
	Show a popup or something suggesting to use "if(Dialog.isVisible() && getActivity()!=null)\n Dialog.dismiss()"
