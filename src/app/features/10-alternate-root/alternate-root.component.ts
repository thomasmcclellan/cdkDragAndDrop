import { 
  Component, 
  ViewChild, 
  TemplateRef, 
  ViewContainerRef, 
  AfterViewInit, 
  OnDestroy 
} from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-alternate-root',
  templateUrl: './alternate-root.component.html',
  styleUrls: ['./alternate-root.component.css']
})
export class AlternateRootComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef, { static: false })
    _dialogTemplate: TemplateRef<any>
  
  private _overlayRef: OverlayRef
  private _portal: TemplatePortal

  constructor(
    private _overlay: Overlay, 
    private _viewContainerRef: ViewContainerRef
  ) { }

  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef)
    this._overlayRef = this._overlay.create({
      positionStrategy: 
        this._overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
      hasBackdrop: true
    })
    
    this._overlayRef.backdropClick().subscribe(() =>  
      this._overlayRef.detach()
    )
  }

  ngOnDestroy() {
    this._overlayRef.dispose()
  }

  openDialog() {
    this._overlayRef.attach(this._portal)
  }
}