import { ComponentRef } from '@angular/core';

import { PoNotification } from './po-notification.interface';
import { PoToaster } from './po-toaster/po-toaster.interface';
import { PoToasterOrientation } from './po-toaster/po-toaster-orientation.enum';
import { PoToasterType } from './po-toaster/po-toaster-type.enum';

/**
 * @description
 *
 * Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:
 *
 * - success,
 * - warning,
 * - error,
 * - information.
 *
 * Cada um destes métodos recebe como parâmetro o objeto "PoNotification" que contém os dados da mensagem e o
 * objeto ViewContainerRef que é a representação do container do componente onde será criada a notificação.
 *
 * Estas notificações serão exibidas durante 10 segundos, após este tempo a mesma é removida automaticamente.
 */
export abstract class PoNotificationBaseService {

   // Array responsável por guardar a instância de po-toaster's superiores.
  stackTop: Array<ComponentRef<any>> = [];

  // Array responsável por guardar a instância de po-toaster's inferiores.
  stackBottom: Array<ComponentRef<any>> = [];

  // Duração do toaster ativo.
  protected durationToaster = 10000;

  /**
   * Emite uma notificação de sucesso.
   *
   * @param notification {PoNotification | string} Objeto com os dados da notificação ou somente a string com a mensagem da notificação.
   */
  public success(notification: PoNotification | string) {
    this.createToaster(this.buildToaster(notification, PoToasterType.Success));
  }

  /**
   * Emite uma notificação de atenção.
   *
   * @param notification {PoNotification | string} Objeto com os dados da notificação ou somente a string com a mensagem da notificação
   */
  public warning(notification: PoNotification | string) {
    this.createToaster(this.buildToaster(notification, PoToasterType.Warning));
  }

  /**
   * Emite uma notificação de erro.
   *
   * @param notification {PoNotification | string} Objeto com os dados da notificação ou somente a string com a mensagem da notificação
   */
  public error(notification: PoNotification | string) {
    this.createToaster(this.buildToaster(notification, PoToasterType.Error));
  }

  /**
   * Emite uma notificação de informação.
   *
   * @param notification {PoNotification | string} Objeto com os dados da notificação ou somente a string com a mensagem da notificação
   */
  public information(notification: PoNotification | string) {
    this.createToaster(this.buildToaster(notification, PoToasterType.Information));
  }

  /**
   * @docsPrivate
   *
   * Cria um objeto do tipo PoToaster de acordo o tipo.
   *
   * @param notification {PoNotification | string} Objeto PoNotification com os dados da notificação
   */
  private buildToaster(notification: PoNotification | string, type: PoToasterType): PoToaster {
    let index = 0;
    let orientation;

    if ((<PoNotification>notification).orientation === undefined ||
        (<PoNotification>notification).orientation === PoToasterOrientation.Bottom) {
      index = this.stackBottom.length;
      orientation = PoToasterOrientation.Bottom;
    } else {
      index = this.stackTop.length;
      orientation = PoToasterOrientation.Top;
    }

    const toaster: PoToaster = {
      componentRef: undefined,
      message: (<PoNotification>notification).message || <string>notification,
      type: type,
      orientation: orientation,
      action: (<PoNotification>notification).action,
      actionLabel: (<PoNotification>notification).actionLabel,
      position: index
    };

    if ((<PoNotification>notification).action) {
      toaster.action = (param: any) => {
        (<PoNotification>notification).action();
        this.destroyToaster(param.componentRef);
      };
    }

    return toaster;
  }

  /**
   * @docsPrivate
   *
   * Método responsável por criar o po-toaster.
   *
   * @param toaster {PoToaster} Objeto contendo as informações do toaster.
   */
  abstract createToaster(toaster: PoToaster): void;

  /**
   * @docsPrivate
   *
   * Método responsável por destruir o po-toaster.
   *
   * @param toaster {ComponentRef} Número da posição ou instancia do toaster a ser destruído.
   * @param orientation {PoToasterOrientation} Orientação do PoToaster: Top ou Bottom
   */
  abstract destroyToaster(toaster: ComponentRef<any>): void;

}